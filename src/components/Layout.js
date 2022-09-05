import { Stack, UnorderedList, ListItem, Flex, Button } from '@chakra-ui/react'
import { Fragment } from 'react'
import { Link as ReachLink, Outlet } from 'react-router-dom'


function Layout( ) {
    return (
        <Fragment>
            <Stack pt='30px' pb='10px' color={'white'}  >
                <Flex as={UnorderedList} justifyContent='space-around' marginBottom="30px">
                    <ListItem listStyleType={'none'}><Button as={ReachLink} to='/' colorScheme='blue' variant='solid' height={'fit-content'} paddingTop={1} paddingBottom={1}>Home </Button></ListItem>
                    <ListItem listStyleType={'none'}><Button as={ReachLink} to='/cart' colorScheme='blue' variant='solid' height={'fit-content'} paddingTop={1} paddingBottom={1}>Carrinho  </Button></ListItem>
                </Flex>
            </Stack>
            <Outlet />
        </Fragment >
    )
}

export default Layout
