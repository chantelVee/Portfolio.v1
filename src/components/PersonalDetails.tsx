

export default function PersonalDetails({onOpenModal}: {onOpenModal: () => void}) {
 

  return (
    <>
      <div className="personal-details">
        <h2>Chantel Boiro</h2>
        <h1>SOFTWARE DEVELOPER</h1>
        <h3>Based in London, UK</h3>
      </div>
      <button id="cv-download" onClick={onOpenModal}>Download CV</button>
           
    </>
  )
}
