import { Card } from "@/components/Elements/card"
import { formatNumberToK } from "@/services/data"
import Image from "next/image"
import { CardItemsProps } from "@/services/types"
import Link from "next/link"

const CardItems: React.FC<CardItemsProps> = (props) => {
    const {data} = props
    return (
        <Link href={`/product/${data.id}`}>
        <Card key={data.id} varian="mx-2 max-w-sm">
        <div className="grid grid-cols-3 md:grid-cols-1 ...">
            <div className="col-span-1 ...">
                <Image width={200} height={200} className="img-item" src={`/assets/${data.photo}`} alt="" />
            </div>
            <div className="col-span-2 ... mx-2 sm:mx-0">
                <h4 className="text-ls sm:mt-2 font-bold">{data.name}</h4>
                <p className="text-sm mt-2 hidden md:block">{data.description}</p>
                <div className="my-2 grid grid-cols-3 grid-cols-5 ...">
                    <div className="col-span-1 ...">
                        <Image width={20} height={20} src={`/assets/${data.tutor_photo}`} alt="" />
                    </div>
                    <div className="text-sm col-span-4 ...">
                        <p><b>{data.tutor}</b></p>
                        <p>{data.tutor_position} di {data.tutor_company}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="grid grid-cols-1 grid-cols-4 ...">
            <div className="col-span-3 ...">
            <div className="grid grid-cols-1 grid-cols-2 ...">
                <div className="col-span-1"><Image width={20} height={20} alt="" src="/assets/rating.svg"/></div>
                <div className="col-span-1">{data.rating_average} ({data.total_selling})</div>
            </div>
            </div>
            <div className="col-span-1 ...">
                <b><h5 className="price">Rp {formatNumberToK(data.new_price)}</h5></b>
            </div>
        </div>
    </Card>
    </Link>
    )
}

export default CardItems