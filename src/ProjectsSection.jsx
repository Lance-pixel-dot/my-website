import Card from "./Card";
function ProjectsSection(){
    return(
        <>
           <section className="bg-[#C5B8BA]">
               <section className="w-11/12 place-self-center p-4 mb-3">
                   <h2 className="font-semibold text-3xl mb-3" data-aos="fade-up">Projects</h2>
                   <section className="grid grid-cols-3 gap-5">
                       <Card time={200}></Card>
                       <Card time={300}></Card>
                       <Card time={400}></Card>
                       <Card time={500}></Card>
                       <Card time={600}></Card>
                       <Card time={700}></Card>
                   </section>
               </section>
           </section>
        </>
    );
}

export default ProjectsSection