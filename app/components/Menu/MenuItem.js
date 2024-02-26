export default function MenuItem(){
    return(
        <div className= " w-80  bg-gray-200 p-4 rounded-lg text-center group hover:bg-white hover:shadow-md hover:shadow-black/75 transition-all ">
       
        <img src="/pizza2.png"  alt="pizza"/>
        
            <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
            <p className="text-gray-500 text-sm ">
                asdsaf afas fasf asdf as as as a asaasdf afasdfasdf
            </p>
            <button className="bg-red-500 text-white rounded-full px-8 py-2">Add to cart $12</button>
        
    </div>
    )
}