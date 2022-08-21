import CardPage from "./cardPage"

const Applicants = [{
    title: "Tate",
    data: [{
        icon: "fa fa-history fa-1x",
        location: "React.js",
    },
    {
        icon: "fa  fa-clone fa-1x",
        location: "10 Years",
    }]
},
{
    title: "Ohmure",
    data: [{
        icon: "fa fa-history fa-1x",
        location: "SAP",
    },
    {
        icon: "fa  fa-clone fa-1x",
        location: "1 Years",
    }]
},
{
    title: "Furutate",
    data: [{
        icon: "fa fa-history fa-1x",
        location: "SAP",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "10 Years",
    }]
},
{
    title: "Oshima",
    data: [{
        icon: "fa fa-history fa-1x",
        location: "Human Resources",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "1 Years",
    }],

    title: "Software Engineer",
    data: [{
        icon: "fa fa-history fa-1x",
        location: "SAP",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "10 Years",
    }]
},
{
    title: "Airi",
    data: [{
        icon: "fa fa-history fa-1x",
        location: "Human Resources",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "1 Years",
    }]
},
{
    title: "Airima",
    data: [{
        icon: "fa fa-history fa-1x",
        location: "SAP",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "10 Years",
    }]
},
{
    title: "Chiyo",
    data: [{
        icon: "fa fa-history fa-1x",
        location: "Human Resources",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "1 Years",
    }]
}
]

function Applicant() {
    return (

        <div>
            <CardPage
                title={"Applicants"}
                data={Applicants}
                displayIcon={true} />
        </div>

    );
}

export default Applicant;
