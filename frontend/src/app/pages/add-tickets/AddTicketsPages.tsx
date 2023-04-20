import React from 'react'
import { Paper, createStyles, Center } from '@mantine/core'
import { PageLayout } from '../../../view/components/PageLayout/PageLayout'
import { AddTicketsForm, AddTicketsFormValues } from '../../forms/AddTicketsForm'
import { colors } from '../../constants/colors'
import { useAddNewTicketMutation } from '../../store/ticketsSlice'
import { useNavigate } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 500,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}))

export const AddTicketsPage = () => {
    const { classes } = useStyles()
    const navigate = useNavigate()

    // This is the mutation hook that will be used to add a new ticket
    const [addNewTicket] = useAddNewTicketMutation()

    const onFormSubmit = (values: AddTicketsFormValues) => {
        addNewTicket(values)
            .unwrap()
            .then((res) => {
                if (res && res.message === 'ticket.created') {
                    console.log('ticket created successfully')
                    navigate('/list-tickets')
                }
            })
            .catch((err) => {
                console.log('err', err)
                // Potentially show an error message to the user in another way
                alert('Error creating ticket')
            })
    }

    return (
        <PageLayout>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Add Tickets</h3>
                    <AddTicketsForm onSubmit={onFormSubmit} />
                </Paper>
            </Center>
        </PageLayout>
    )
}
