import axios from 'axios'

export const newMember = async (data) => {
    const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/new_member`,
        data
    )
    return response.data
}

export const newDonation = async (data) => {
    const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/new_donation`,
        data
    )
    return response.data
}

export const newSocio = async (data) => {
    const response = await axios.post(
        `${import.meta.env.VITE_APP_API_ENDPOINT}/new_socio`,
        data
    )
    return response.data
}

