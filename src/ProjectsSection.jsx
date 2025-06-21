import Card from "./Card";
function ProjectsSection(){
    return(
        <>
           <section className="p-2">
               <h2 className="font-semibold text-3xl mb-3">Projects</h2>
               <section className="grid grid-cols-3 gap-2 justify-items-center">
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