import CardPage from "./cardPage"

const JD = [{
    title: "Software Engineer",
    data: [{
        icon: "fa fa-location-arrow fa-1x",
        location: "fa-location-arrow",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "10 Years",
    }]
},
{
    title: "SAP Consultant",
    data: [{
        icon: "fa fa-location-arrow fa-1x",
        location: "Nasu",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "1 Years",
    }]
},
{
    title: "Software Engineer",
    data: [{
        icon: "fa fa-location-arrow fa-1x",
        location: "fa-location-arrow",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "10 Years",
    }]
},
{
    title: "SAP Consultant",
    data: [{
        icon: "fa fa-location-arrow fa-1x",
        location: "Nasu",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "1 Years",
    }],
    title: "Software Engineer",
    data: [{
        icon: "fa fa-location-arrow fa-1x",
        location: "fa-location-arrow",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "10 Years",
    }]
},
{
    title: "SAP Consultant",
    data: [{
        icon: "fa fa-location-arrow fa-1x",
        location: "Nasu",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "1 Years",
    }]
},
{
    title: "Software Engineer",
    data: [{
        icon: "fa fa-location-arrow fa-1x",
        location: "Tokyo",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "10 Years",
    }]
},
{
    title: "SAP Consultant",
    data: [{
        icon: "fa fa-location-arrow fa-1x",
        location: "Nasu",
    },
    {
        icon: "fa fa-clone fa-1x",
        location: "1 Years",
    }]
}
]

function JobDescription() {
    return (

        <div>
            <CardPage
                title={"Job Descriptions"}
                data={JD} 
                displayIcon={false}/>
        </div>

    );
}

export default JobDescription;
