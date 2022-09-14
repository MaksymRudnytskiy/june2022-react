import './simpsonStyle.css'

function simpsonComp(props) {

    let {itemName, pic, description} = props

    let familyMember = 'familyMemberDiv'

    return (
        <div>

            <div className={familyMember}>
                <h2>{itemName}</h2>
                <img src={pic} className={'photo'}/>
                <p>
                    {description}
                </p>
            </div>

        </div>
    )
}


export default simpsonComp