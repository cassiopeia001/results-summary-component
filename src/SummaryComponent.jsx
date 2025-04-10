import RatingComponent from "./RatingComponent";
import Button from "./Button";
import categories from "./data.json"

export default function SummaryComponent (){
    return (
        <div className="flex flex-col gap-8 p-10">
            <h1 className="text-DarkGrayBlue font-bold text-xl">Summary</h1>
            <div className="flex flex-col gap-4">
                <RatingComponent category={categories[0]} color="red"/>
                <RatingComponent category={categories[1]} color="yellow"/>
                <RatingComponent category={categories[2]} color="green"/>
                <RatingComponent category={categories[3]} color="blue"/>
            </div>
            <Button/>
        </div>
    )
}