"use client"

interface PlanCardProps {
  id: string
  name: string
  price: string
  savings?: string
  isSelected: boolean
  onClick: () => void
}

export function PlanCard({ id, name, price, savings, isSelected, onClick } : PlanCardProps) {
  
 return (
    <div
      className={`border border-gray-800 rounded-lg p-4 cursor-pointer transition-all bg-gray-950 ${
        isSelected ? "border-red-600 bg-gray-800 ring-2 ring-red-600" : "border-border hover:border-red-950"
      }`}
      onClick={onClick}
    >
      <div className="flex flex-col space-y-2">
        <div className="font-medium text-gray-100">{name}</div>
        <div className="text-2xl font-bold text-gray-100">{price}</div>
        {savings && <div className="text-xs text-green-600 font-medium">{savings}</div>}
      </div>
    </div>
  )
}