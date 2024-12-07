import { getImageURL } from "./GetImage";

function Profile({
    imageId,
    name,
    imageSize=70,
    profession,
    awards,
    discover,
}){
    return(
        <section className="profile">
            <h2>{name}</h2>
            <img className="picture"
            src={getImageURL(imageId)}
            alt={name}
            width={imageSize}
            height={imageSize}
            />
            <ul>
                <li><b>Profession:</b>{profession}</li>
                <li>
                    <b>Awards:{awards.length}</b>
                    ({awards.join(', ')})
                </li>
                <li><b>Discovered:</b>{discover}</li>


            </ul>

        </section>
    );
}

export default function Gallery(){
    return(
        <div>
            <h1>Noble Scientists</h1>
            <Profile
        imageId="szV5sdG"
        name="Maria Skłodowska-Curie"
        profession="physicist and chemist"
        discovery="polonium (chemical element)"
        awards={[
          'Nobel Prize in Physics',
          'Nobel Prize in Chemistry',
          'Davy Medal',
          'Matteucci Medal'
        ]}
      />
      <Profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
    </div>

    )
}