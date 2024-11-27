import React from "react";

function Card({myName="MR. GANGWAR",position="DEVLOPER"}) {
    // console.log(myObj);    
    return (
        <figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800 mb-4">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              {myName}
            </div>
            <div>
            {position}, Noida
            </div>
          </figcaption>
        </div>
      </figure>
    )
}

export default Card;