import ResultsComponent from "./ResultsComponent"
import SummaryComponent from "./SummaryComponent"
export default function MainCard(){
    return (
        <div className=" w-full md:w-auto md:flex items-stretch md:rounded-2xl bg-white">
            <div className="flex-1">
                <ResultsComponent />
            </div>
            <div className="flex-1">
                <SummaryComponent />    
            </div>
        </div>
    )
}