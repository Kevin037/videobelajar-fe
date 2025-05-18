import { formatNumberToK } from "@/services/data";
import { Card } from "@/components/Elements/card";
import { H1, H2 } from "@/components/Elements/heading";
import { ButtonPrimary } from "@/components/Elements/button";
import Image from "next/image";

type Props = {
    isDetail?: boolean;
    data: {
        name?: string;
        description?: string;
        page_title?: string;
        photo: string;
        new_price: number;
        price: number;
        discount: number;
        language: string;
    // [key: string]: any;
  };
    id?: string | number;
      facilities: {
    key: string;
    name: string;
    value: string;
    img: string;
  }[];
}

type Facility = {
  key: string;
  name: string;
  value: string;
  img: string;
};

export const ItemSpesification: React.FC<Props> = (props) => {
    const {isDetail,data,id,facilities} = props
    return (
        <Card varian="md:mr-4 p-4">
            {isDetail &&
                <Image className="img-item hidden md:block" src={`../assets/${data?.photo}`} alt="" />
            }
            <H1>{data?.page_title}</H1><br />
            <div className="grid grid-cols-12 ...">
                <div className="col-span-3 ..."><b><h5 className="price">Rp {formatNumberToK(data?.new_price)}</h5></b></div>
                <div className="col-span-5 ...">
                    {data?.price > data?.new_price && (
                        <p className="line-through text-black-400 text-md">Rp {formatNumberToK(data?.price)}</p>
                    )}
                </div>
                <div className="col-span-4 ...">
                    {data.discount > 0 && (
                        <p className="bg-yellow-400 rounded-lg text-gray-100 text-md px-2 py-1">Diskon {data?.discount}%</p>
                    )}
                </div>
            </div>
            {!isDetail && 
            <>
                <p className="mt-2 text-sm text-blue-400">Penawaran spesial tersisa 2 hari lagi!</p>
                <ButtonPrimary url={`/checkout/${id}`} varian="mt-4">Beli Sekarang</ButtonPrimary>
            </>
            }
            <H2 varian="mt-4">Kelas Ini Sudah Termasuk</H2>
            <div className="grid grid-cols-2 ...">
                {facilities.length > 0 && facilities.map((facility:Facility) => (
                    (facility.value) && (
                        <div key={facility.key} className="col-span-1 ... mt-3">
                            <div className="grid grid-cols-4 ...">
                                <div className="col-span-1 ..."><Image src={`../assets/`+facility.img} alt="" /></div>
                                <div className="col-span-3 ..."><p>{facility.value} {facility.name}</p></div>
                            </div>
                        </div>
                    )
                ))}
            </div>
            <H2 varian="mt-4">Bahasa Pengantar</H2>
            <div className="grid grid-cols-8 ...">
                <div className="col-span-1 ..."><Image src="../assets/bahasa.svg" alt="" /></div>
                <div className="col-span-7 ..."><p>{data?.language}</p></div>
            </div>
        </Card>
    )
}