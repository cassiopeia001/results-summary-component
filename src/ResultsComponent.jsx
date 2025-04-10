export default function ResultsComponent(){
    return (
        <div className="flex flex-col items-center justify-center gap-5 p-5 bg-gradient-to-b from-LightSlateBlue via-LightRoyalBlue to-LightRoyalBlue rounded-b-2xl md:rounded-2xl md:h-full">
            <h2 className="text-LightLavender font-bold">Your Result</h2>
            <div className="bg-gradient-to-t to-PersianBlue from-LightRoyalBlue via-PersianBlue rounded-[100%] w-40 h-40 flex flex-col items-center justify-center gap-2">
                <h1 className="text-5xl text-white font-extrabold">76</h1>
                <p className="text-LightSlateBlue font-bold">of 100</p>
            </div>
            <h1 className="text-2xl font-semibold text-White">Great</h1>
            <p className="text-center text-LightLavender">You scored higher than 65% of the people who have taken these tests.</p>
        </div>
        
    )
}