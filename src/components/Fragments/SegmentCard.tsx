import Image from "next/image";
import { number_format } from "@/services/data";
import { ButtonPrimaryMD, ButtonWhiteMD } from "@/components/Elements/button";
import { ClassStatusDisplay, StatusDisplay } from "@/components/Elements/status_orders";
import React from "react";
import { ClassCardProps, OrderCardProps, SegmentCardProps } from "@/services/types";

export const SegmentCard: React.FC<SegmentCardProps> = (props) => {
    const {headContent,middleContent, footContent} = props
    return (
        <>
        <div className="mt-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-300">
             <div className="border-b p-4 bg-green-50 border-gray-300 rounded-lg">
                 <div className="grid grid-cols-1 md:grid-cols-12 ... text-sm text-gray-600">
                    {headContent}
                 </div>
             </div>
             <div className="border-b p-4 bg-green-30 border-gray-300">
                <div className="grid grid-cols-12 ... gap-2">
                    {middleContent}
                 </div>
             </div>
             <div className="p-4 bg-green-50 rounded-lg">
                <div className="grid grid-cols-12 ... flex items-center">
                    {footContent}
                </div>
             </div>
         </div>
        </>
    )
}

export const ClassCard: React.FC<ClassCardProps> = (props) => {
    const {order} = props
    return (
        <>
        <SegmentCard 
            headContent={
                <>
                     <div className="col-span-9 ...">
                         <p className="hidden md:block">{order.completed_my_classes}/{order.total_my_classes} Modul Terselesaikan</p>
                     </div>
                     <div className="col-span-3 ... text-left md:text-right mt-3 md:mt-0">
                        <ClassStatusDisplay status={order.status as "0" |"1"} />
                     </div>
                </>
            }
            middleContent={
                <>
                    <div className="col-span-12 md:col-span-3 ... gap-3 object-cover h-auto">
                        <Image className="object-cover h-full w-full rounded-lg" src={`/assets/${order.photo}`} width={100} height={100} alt="" />
                    </div>
                    <div className="col-span-12 md:col-span-9 ... mx-2 sm:mx-0">
                        <h4 className="text-ls mt-2 md:mt-0 font-bold">{order.title}</h4>
                        <p className="text-sm mt-2 hidden md:block">Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan  kurikulum terbaik</p>
                        <div className="my-2 grid grid-cols-3 grid-cols-12">
                            <div className="col-span-2 md:col-span-1">
                                <Image src={`/assets/${order.tutor_photo}`} width={20} height={20} alt="" />
                            </div>
                            <div className="text-sm col-span-10 md:col-span-10 ...">
                                <p><b>{order.tutor}</b></p>
                                <p>{order.tutor_position} di {order.tutor_company}</p>
                            </div>
                        </div>
                        <div className="my-2 grid grid-cols-3 grid-cols-5 text-sm text-gray-500 mt-4">
                            <div className="col-span-5 md:col-span-3 flex gap-2">
                                <Image src="/assets/modul.svg" width={20} height={20} className="w-5" alt="" />{order.total_my_classes} Modul
                                <Image src="/assets/time.svg" width={20} height={20} className="w-5" alt="" />{order.total_time} Menit
                            </div>
                            <div className="col-span-1"></div>
                        </div>
                    </div>
                </>
            }
            footContent={
                <>
                    <div className={`text-align col-span-6 md:col-span-3`}>
                        Progres Kelas: <span className="font-bold">{order.progress}%</span>
                    </div>
                    <div className={`flex items-center col-span-6 ${(order.class_completed == "0") ? "md:col-span-5" : "md:col-span-3"}`}>
                        {(order.class_completed == "0") && (
                            <Image src="/assets/progress_bar_completed.svg" width={100} height={100} className="justify-center w-full" alt="" />
                        )}
                        {(order.class_completed == "1") && (
                            <Image src="/assets/progress_bar.svg" width={100} height={100} className="justify-center w-full" alt="" />  
                        )}
                    </div>
                    {(order.class_completed == "1") && (
                        <>
                            <div className={`text-center md:text-right col-span-12 md:col-span-3 mt-4 md:mt-0`}>
                                <ButtonWhiteMD varian="mx-1">Unduh Sertifikat</ButtonWhiteMD>
                            </div>
                            <div className={`text-center md:text-right col-span-12 md:col-span-3 mt-2 md:mt-0`}>
                                    <ButtonPrimaryMD url={`/class/${order.id}`} varian="mx-1">Lihat Detail Kelas</ButtonPrimaryMD>
                            </div>
                        </>
                    )}
                    {(order.class_completed == "0") && (
                        <div className={`text-center md:text-right col-span-12 md:col-span-4 mt-4 md:mt-0`}>
                            <ButtonPrimaryMD url={`/class/${order.id}`}>Lanjutkan Pembelajaran</ButtonPrimaryMD>  
                        </div>
                    )}
                </>
            }
        />
        </>
    )
}

export const OrderCard: React.FC<OrderCardProps> = (props) => {
    const {order} = props
    return (
        <>
            <SegmentCard 
                headContent={
                    <>
                        <div className="col-span-9 ... flex gap-3 text-sm text-gray-600">
                            <p className="hidden md:block">No. Invoice: </p> <span className="text-blue-600"> {order.no}</span>
                            <p className="hidden md:block">Waktu Pembayaran: </p> <span>{order.paid_at}</span>
                        </div>
                        <div className="col-span-3 ... text-left md:text-right mt-3 md:mt-0">
                            <StatusDisplay status={order.status as "pending" | "success" | "cancelled"} />
                        </div>
                    </>
                }
                middleContent={
                    <>
                        <div className="col-span-3 md:col-span-1 ...">
                            <Image className="rounded-lg object-cover h-auto" src={`/assets/${order.photo}`} width={100} height={100} alt="" />
                        </div>
                        <div className="col-span-9 md:col-span-9 ...border-r border-gray-300">
                            <p className="text-lg">{order.name}</p>
                        </div>
                        <div className="col-span-12 md:col-span-2 ... text-left md:text-right">
                            <p className="text-sm mt-3 md:mt-0">Harga</p>
                            <p className="font-medium">Rp {number_format(order.price)}</p>
                        </div>
                    </>
                }
                footContent={
                    <>
                        <div className="col-span-7 ...">
                            Total Pembayaran
                        </div>
                        <div className="col-span-5 ... text-right">
                            <p className="price">Rp {number_format(order.price)}</p>
                        </div> 
                    </>
                }
            />
        </>
    )
}