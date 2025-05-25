import { FormEvent, useEffect, useState } from "react";
import Authlayout from "@/components/Layouts/AuthLayout";
import { ButtonPrimarySubmit, ButtonWhite } from "@/components/Elements/button";
import { Card } from "@/components/Elements/card";
import { H1 } from "@/components/Elements/heading";
import { ItemSpesification } from "@/components/Fragments/ItemSpesification";
import { getHowToPay, getPaymentMethods } from "@/services/data";
import { TransactionNominal } from "@/components/Fragments/TransactionNominal";
import { PaymentMethodDetail } from "@/components/Fragments/PaymentMethodDetail";
import { ChevronDown } from "lucide-react";
import { PaymentTimer } from "@/components/Fragments/PaymentTimer";
import useOrder from "@/hooks/useOrder";
import useClass from "@/hooks/useClass";
import Image from "next/image";
import { PaymentMethod } from "@/services/types";
import { useRouter } from "next/router";

type HowToPayGroup = {
  [key: string]: string; // tergantung implementasi `getHowToPay()`
};

const PaymentPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
    const [openHowToPay, setOpenHowToPay] = useState<string>("");
    const [howToPays, setHowToPays] = useState<HowToPayGroup>({});
    const { currentOrder } = useOrder(Number(id));
    const class_id = currentOrder?.class_id;
    const { classFacilities } = useClass({id:class_id});
    const { paidOrder, status } = useOrder();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if(token === null) {
            window.location.href = "/login";
        }
        setHowToPays(getHowToPay());
    },[]);

    useEffect(() => {
        setPaymentMethod(getPaymentMethods(currentOrder?.payment_method));
    }, [currentOrder]);

    const HandlePaid = () => {
        if (paymentMethod === null) {
            alert("Pilih Metode Pembayaran");
            return false;
        }
        paidOrder({order_id:id});
    };

    useEffect(() => {
        if (status) {
            window.location.href = "/success_payment";
        }
    }, [status]);

 return (
    <Authlayout title="Home" navType="home" withFooter={false} style={{paddingTop: "0"}} customHead={
        <Image 
            src="/assets/process_payment.svg" 
            width={160} 
            height={40} 
            alt="Payment process" 
            className="w-full h-10 object-contain" 
        />
    }>
        <PaymentTimer />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="p-2 mt-4 block md:hidden">
                <Image 
                    src="/assets/process_payment_mobile.svg" 
                    width={320} 
                    height={80} 
                    alt="Payment process mobile" 
                    className="w-full h-20 object-contain" 
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 ...">
                <div className="col-span-2 order-2 md:order-1">
                    <Card varian="md:mr-4">
                        <H1>Metode Pembayaran</H1><br />
                        {paymentMethod && (
                            <PaymentMethodDetail paymentMethod={paymentMethod} />
                        )}
                        <TransactionNominal /><br />
                        <div className="grid grid-cols-1 md:grid-cols-2  ... gap-2 mt-2">
                            <div className="col-span-1 my-1"><ButtonWhite url={`/change_payment/${id}`}>Ganti Metode Pembayaran</ButtonWhite></div>
                            <div className="col-span-1 my-1"><ButtonPrimarySubmit onClick={HandlePaid} >Bayar Sekarang</ButtonPrimarySubmit></div>
                        </div>
                    </Card>
                    <Card varian="md:mr-4">
                        <H1>Tata Cara Pembayaran</H1><br />
                        {Object.entries(howToPays).map(([groupName, method]) => (
                            <div key={groupName} className="bg-white rounded-xl shadow-sm">
                            <button
                                className="w-full flex justify-between items-center px-4 py-3 font-medium mb-3"
                                onClick={() =>
                                setOpenHowToPay(openHowToPay === groupName ? "" : groupName)
                                }
                            >
                                {groupName}
                                <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                    openHowToPay === groupName ? "rotate-180" : ""
                                }`}
                                />
                            </button>
                            {openHowToPay === groupName && (
                                <div className="p-4 my-2">
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={method.icon}
                                            width={32}
                                            height={32}
                                            alt={method.name}
                                            className="w-8 h-8 object-contain"
                                        />
                                        <span>{method.name}</span>
                                    </div>
                                </div>
                            )}
                            </div>
                        ))}
                    </Card>
                </div>
                <div className="col-span-1 ... mx-2 sm:mx-0 order-1 lg:order-2">
                    {currentOrder && (
                     <ItemSpesification isDetail={true} data={currentOrder} facilities={classFacilities}/>   
                    )}
                </div>
            </div>
        </div>
    </Authlayout>
 );
}

export default PaymentPage