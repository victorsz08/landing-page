import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";





interface CardPlanProps {
    title: string;
    description: string;
    popular?: boolean;
    value: number;
};

export function CardPlan({ title, description, popular, value } : CardPlanProps) {
    const pricing = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);

    return (
        <div className="w-full h-full flex flex-col gap-2 items-center">
            {popular && (
                <span className="bg-red-950 text-red-600 rounded-sm px-3 py-2 w-fit">
                    <p className="text-xs font-normal">MAIS POPULAR</p>
                </span>
            )}
        <Card className={`${popular ? "border border-red-600" : "border-none"} 
            bg-gray-900 w-[300px] h-[250px] flex flex-col justify-center `}
        >
            <CardHeader className="text-center">
                <CardTitle className="text-slate-100 font-semibold text-lg">
                    {title}
                </CardTitle>
            </CardHeader>
                <CardContent className="text-center">
                    <CardDescription className="text-xs font-normal text-slate-400">
                        {description}
                    </CardDescription>
                </CardContent>
                <CardFooter className="w-full fle items-center justify-center">
                    <h1 className="text-red-600 text-2xl font-bold tracking-tigher">{pricing}</h1>
                </CardFooter>
        </Card>
        </div>
    )
}