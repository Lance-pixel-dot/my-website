import Card from "./Card";
function ProjectsSection(){
    return(
        <>
           <section className="w-11/12 place-self-center p-4">
               <h2 className="font-semibold text-3xl mb-3">Projects</h2>
               <section className="grid grid-cols-3 gap-2">
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
                   <Card></Card>
               </section>
           </section>
        </>
    );
}

export default ProjectsSection