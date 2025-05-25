import { formatNumberToK } from "@/services/data";
import { Card } from "@/components/Elements/card";
import { H1, H2 } from "@/components/Elements/heading";
import { ButtonPrimary } from "@/components/Elements/button";
import Image from "next/image";
import { Facility, ItemSpesificationProps } from "@/services/types";

export const ItemSpesification: React.FC<ItemSpesificationProps> = (props) => {
    const {isDetail,data,id,facilities} = props
    return (
        <Card>
            <div className="relative">
                <Image 
                    src={`/assets/${data.photo}`} 
                    width={400} 
                    height={225} 
                    alt={data.name || "Course thumbnail"} 
                    className="w-full h-48 object-cover rounded-lg"
                />
                {!isDetail && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/50 to-transparent">
                        <div className="flex items-center gap-2">
                            <Image 
                                src="/assets/play.svg" 
                                width={24} 
                                height={24} 
                                alt="Video icon" 
                                className="w-6 h-6"
                            />
                            <span className="text-sm text-white">{data.duration} Video</span>
                        </div>
                    </div>
                )}
            </div>
            <div className="mt-4">
                <H1>{data.name}</H1>
                <p className="text-sm text-gray-600 mt-2">{data.description}</p>
                <div className="mt-4">
                    <div className="flex items-center gap-2 mb-2">
                        <Image 
                            src="/assets/rating.svg" 
                            width={24} 
                            height={24} 
                            alt="Rating icon" 
                            className="w-6 h-6"
                        />
                        <span className="text-sm">{data.rating} • {data.total_user} Pengguna</span>
                    </div>
                    {facilities && facilities.map((facility, index) => (
                        <div key={index} className="flex items-center gap-2 mb-2">
                            <Image 
                                src={`/assets/${facility.icon}`} 
                                width={24} 
                                height={24} 
                                alt={facility.name} 
                                className="w-6 h-6"
                            />
                            <span className="text-sm">{facility.name}</span>
                        </div>
                    ))}
                </div>
                <div className="mt-4">
                    <p className="text-gray-400 text-sm line-through">Rp {data.price}</p>
                    <p className="text-green-600 font-semibold text-xl">Rp {data.new_price}</p>
                </div>
                {!isDetail && (
                    <ButtonPrimary varian="w-full mt-4" url={`/checkout/${data.id}`}>
                        Beli Sekarang
                    </ButtonPrimary>
                )}
            </div>
        </Card>
    )
}