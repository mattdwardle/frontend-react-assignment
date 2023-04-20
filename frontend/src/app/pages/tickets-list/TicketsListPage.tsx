import { Paper, createStyles, Center } from '@mantine/core'
import { PageLayout } from '../../../view/components/PageLayout/PageLayout'
import { colors } from '../../constants/colors'
import { TicketsListTable, TicketsListTableItemVM } from '../../tables/TicketsListTable'
import { useGetAllTicketsQuery } from '../../store/ticketsSlice'

const items: TicketsListTableItemVM[] = [
    {
        id: 'id-5426463',
        email: 'test@example.com',
        title: 'ticket title',
        description: 'ticket description',
        price: 'ticket price',
        amount: 5,
        supplier: 'test supplier',
    },
]

const useStyles = createStyles((theme) => ({
    formContainer: {
        width: 850,
        minHeight: 500,
    },
    header: {
        marginTop: 0,
        textAlign: 'center',
        color: colors.blue,
    },
}))

export const TicketsListPage = () => {
    const { classes } = useStyles()

    // Can turn on polling by uncommenting the following lines
    // const {
    //     data: allTicketData,
    //     error,
    //     isError,
    //     isLoading,
    // } = useGetAllTicketsQuery(undefined, {
    //     pollingInterval: 3000,
    // })

    const { data: allTicketData, error, isError, isLoading } = useGetAllTicketsQuery()

    return (
        <PageLayout>
            <Center>
                <Paper p="xl" shadow="md" className={classes.formContainer}>
                    <h3 className={classes.header}>Tickets list</h3>
                    {isLoading && <div>Loading...</div>}
                    {isError && <div>Error: {error}</div>}
                    {allTicketData?.data && <TicketsListTable items={allTicketData.data} />}
                </Paper>
            </Center>
        </PageLayout>
    )
}
