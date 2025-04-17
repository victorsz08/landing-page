import { BookmarkCheck, Check, CheckCircle, LucideIcon, UserIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";





interface CardAboutProps {
    title: string;
    items: string[];
    icon: LucideIcon;
};



export function CardAbout({ icon: Icon, items, title } : CardAboutProps) {

    return (
        <Card className="w-[400px] h-full bg-gray-900 border-none shadow-none gap-10 px-4 py-6
        max-sm:w-full max-sm:h-full max-sm:px-4 max-sm:py-6">
            <CardHeader className="text-slate-100 flex flex-col justify-start items-start gap-2">
                <span className="text-red-600 bg-red-950 p-2 rounded-full">
                    <Icon size={32}/>
                </span>
                <CardTitle className="text-base font-bold text-slate-100">
                    {title}
                </CardTitle>
                    </CardHeader>
                <CardContent className="flex flex-col gap-2 w-full">
                    {items.map((item, index) => (
                        <div key={index} className="flex gap-3 items-center w-full">
                            <span className="w-[14px] h-[14px]">
                                <Check className="text-red-600" size={24}/>
                            </span>
                            <span className="text-slate-500 text-xs font-normal">{item}</span>
                        </div>
                    ))}
                </CardContent>
        </Card>
    )
};


export function CardExclusives() {


    return (
        <div className="flex justify-evenly items-center gap-10 max-sm:flex-col max-sm:gap-6">
            <CardAbout
                title="Treino Personalizado"
                icon={UserIcon}
                items={[
                    "Planos de treino 100% ajustados ao seu nível, objetivos e rotina.",
                    "Flexibilidade total: treine onde e quando quiser, com meu suporte contínuo via WhatsApp."
                ]}
            />
            <CardAbout
                title="Acompanhamento Contínuo"
                icon={CheckCircle}
                items={[
                    "Feedbacks regulares, ajustes personalizados e suporte por vídeos para aprimorar suas execuções.​",
                    "Disponibilidade para tirar dúvidas e adaptar treinos conforme suas necessidades.",
                    "Acesso a videos explicativos de todos os exercícios prescritos, garantindo um melhor entendimento e aprendizado!"
                ]}
            />
            <CardAbout
                title="Resultados Comprovados"
                icon={BookmarkCheck}
                items={[
                    "Métodos baseados em ciência e mais de 10 anos de experiência em musculação, garantindo máxima eficiência nos treinos.",
                ]}
            />
        </div>
    )
}