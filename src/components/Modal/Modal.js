import React, { Fragment } from 'react'
import ReactDom from "react-dom"

import styles from './Modal.module.css'


const Backdrop = ({ show, close }) => { 
	return (
		<div 
			className={`${styles.backDrop} ${ show ? styles.showBackdrop : null } `}
			onClick={close}
		>
		</div>
	)
}


const Overlay = ({ show, children }) => (
	<div className={`${styles.overlay} ${ show ? styles.showOverlay : null }`}>
		{ children }
	</div>


)

const Modal = ({ show, children, closeModal }) => {
	return (
			<Fragment>
				{
					ReactDom.createPortal(
						<Fragment>
							<Backdrop show={ show } close={closeModal} />
							<Overlay show={ show }>{ children }</Overlay>
						</Fragment>,
						document.getElementById('modal')
					)
				}
			</Fragment>
	)
}

export default Modal
