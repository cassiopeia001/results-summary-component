export default function RatingComponent({category, color}){
    const colorsList ={
        red : "bg-LighterRed text-LightRed",
        yellow: "bg-LightOrangeyYellow text-OrangeyYellow",
        green: "bg-LightGreenTeal text-GreenTeal",
        blue: "bg-LightCobaltBlue text-CobaltBlue"
    };
    return (
        <div className={`flex justify-between rounded-lg items-center p-3 font-hankenGrotesk ${colorsList[color]}`}>

            <div className="flex gap-3">

                <img src= {category.icon} alt="icon" />
                <p className="font-medium">{category.category}</p>
            </div>
            
            <p className="font-bold text-DarkGrayBlue"> 
            {category.score} <span className="opacity-45 ml-1">/ 100</span>
            </p>
        </div>
    )
}