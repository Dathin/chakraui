interface CitiesProps {
    top100Cities: {
          image: string,
          name: string,
          countryName: string,
          countryImage: string,
        }[],
}

export function Cities({top100Cities}: CitiesProps){
    return <h1>xD</h1>
}