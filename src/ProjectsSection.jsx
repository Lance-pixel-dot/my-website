import Card from "./Card";
function ProjectsSection(){
    return(
        <>
           <section className="bg-[#C5B8BA]">
               <section className="w-11/12 place-self-center p-4 mb-3">
                   <h2 className="font-semibold text-3xl mb-3" data-aos="fade-up">Projects</h2>
                   <section className="grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-5 place-items-center">
                       <Card></Card>
                       <Card></Card>
                       <Card></Card>
                       <Card></Card>
                       <Card></Card>
                       <Card></Card>
                   </section>
               </section>
           </section>
        </>
    );
}

export default ProjectsSection