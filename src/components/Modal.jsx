import { useGlobalContext } from "../Context"

const Modal = () => {

    const {selectedMeal, closeModal} = useGlobalContext()
    
    const {strMealThumb: image, strMeal: title, strInstructions: text, strSource: source} = selectedMeal

    return(
        <aside className="modal-overlay">
            <div className="modal-container">
                <img src={image} alt={title} className="img modal-img"/>
                <div className="modal-content">
                  <h4>{title}</h4>
                  <p>Cooking Instuctions</p>
                  <p>{text}</p>
                  <a href={source} target="_blank">Orginal source</a>
                  <button className="btn btn-hipster close-btn" onClick={closeModal}>close</button>
                </div>
            </div>
        </aside>
    )
}
export default Modal