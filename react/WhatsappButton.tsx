import React from 'react'
import PropTypes from 'prop-types'

type Props = {
    logo: string
    phone: string
    message: string
    width: number
    height: number
}

const WhastappButton = ({ logo, phone, message, width, height }: Props) => {
    const formattedMessage = message.replace(/ /g, "%20")
    console.log('el mensaje formateado es: ', formattedMessage, logo);
    return <>
        <div className='fixed bottom-2 right-2 flex flexColumn'>
            <a
                href={`//wa.me/${phone}?text=${formattedMessage}`}
                target="_blank"
                rel="noreferrer"
            >
                <img 
                    src={logo} 
                    width={width}
                    height={height}
                    alt='Logo de Whatsapp'
                />
            </a>
        </div>
    </>
}

WhastappButton.propTypes = {
    logo: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    message: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
}

WhastappButton.defaultProps = {
    logo: 'mi-logo.png',
    phone: '3215981063',
    message: 'esto es una prueba nojoda',
    width: 80,
    height: 80
}

WhastappButton.schema = {
    title: 'Botón de Whatsapp',
    type: 'object',
    properties: {
        logo: {
            title: 'Logo de whatsapp para adidas',
            type: 'string',
            widget: {
                'ui:widget': 'image-uploader'
            }
        },
        phone: {
            title: 'Telefono',
            description: 'Por favor, ingresa un número de telefono',
            type: 'string'
        },
        message: {
            title: 'Mensaje',
            description: 'Por favor, ingresa el mensaje que verá el cliente',
            type: 'string',
            widget: {
                'ui:widget': 'textarea'
            }
        }
    }
}

export default WhastappButton;