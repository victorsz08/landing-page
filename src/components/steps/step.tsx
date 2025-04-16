"use client";




interface StepCardProps {
    title: string;
    step: string;
};


export function StepCard({ title, step } : StepCardProps) {

    return (
        <div className="flex gap-3 justify-start items-center">
            <span className="p-3 w-[45px] h-[45px] text-red-600 bg-red-950 rounded-full text-center">
                <p className="text-base font-bold">
                    {step}
                </p>
            </span>
            <p className="text-slate-300 text-sm font-semibold">
                {title}
            </p>
        </div>
    )
}