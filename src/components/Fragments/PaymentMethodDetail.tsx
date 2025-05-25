import { Card } from "@/components/Elements/card"
import Image from "next/image"
import { PaymentMethodDetailProps } from "@/services/types"

export const PaymentMethodDetail: React.FC<PaymentMethodDetailProps> = (props) => {
    const {paymentMethod} = props
    return (
        <Card varian="bg-gray-50">
            <div className="flex items-center gap-4">
                <Image 
                    src={paymentMethod.icon} 
                    width={48} 
                    height={48} 
                    alt={paymentMethod.name} 
                    className="w-12 h-12 object-contain"
                />
                <div>
                    <h3 className="font-medium">{paymentMethod.name}</h3>
                    <p className="text-sm text-gray-600">{paymentMethod.description}</p>
                </div>
            </div>
        </Card>
    )
}