import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experiences, sites } from "../profile";
const Index = () => (
    <Layout>
        <header className="row">
            <div className="col-md-12">
                <div className="card card-body bg-secondary">
                    <div className="row">
                        <div className="col-md-4">
                            <img src="myface.jpg" className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h1>Nicolás Pérez</h1>
                            <h3>FullStack Developer</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum qui magnam laborum fuga ab reprehenderit eos iste id at saepe? Architecto quos rerum repudiandae quis error illum est excepturi quam?</p>
                            <Link href="/contact">Contacto</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div className="row py-2">
            <div className="col-md-4">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Skills</h1>
                        {
                            skills.map(({ skill, percentage }, i) => (
                                <div className="py-3" key={i}>
                                    <h5>{skill}</h5>
                                    <div className="progress">
                                        <div className="progress-bar bg-success" role="progressbar" style={{ width: `${percentage}%` }}></div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="col-md-8">
                <div className="card bg-light">
                    <div className="card-body">
                        <h1>Experience</h1>
                        <ul className="py-2">
                            {
                                experiences.map(({ title, year, description }, i) => (
                                    <li key={i}>
                                        <h3>{title}</h3>
                                        <h5>{year}</h5>
                                        <p>{description}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="card card-body bg-dark">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="text-center text-align">Sites that I've worked on</h1>
                        </div>
                        {
                            sites.map(({ title, description, url }, i) => (
                                <div className="col-md-4 p-2" key={i}>
                                    <div className="card h-100" >
                                        <div className="overflow">
                                            <img src={url} alt="" className="card-img-top" />
                                        </div>
                                        <div className="card-body">
                                            <h3>{title}</h3>
                                            <p>{description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default Index;