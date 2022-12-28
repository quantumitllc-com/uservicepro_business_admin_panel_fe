import { Pane } from "evergreen-ui"
import { Link } from "react-router-dom"

import MyHeading from "components/heading"
import MyText from "components/text"
import MyButton from "components/button"
import money from "./icons/money.png"
import { ReactComponent as Service } from "./icons/subservice.svg"
import { ReactComponent as Card } from "./icons/card.svg"
import { ReactComponent as Safety } from "./icons/safety.svg"
import bank from "./icons/detail.png"
import payment from "./icons/payment.png"
import connect from "./icons/connect.png"
import styles from "./styles.module.scss"

const Payment = () => (
	<Pane>
		<Pane
			marginBottom={30}
			padding={45}
			borderRadius={6}
			backgroundColor="var(--white)"
		>
			<Pane
				alignItems="center"
				display="flex"
				justifyContent="space-between"
				marginBottom={20}
			>
				<MyHeading fontSize={42}>Payment</MyHeading>
				<img src={money} alt="money" />
			</Pane>
			<Pane marginBottom={40}>
				<MyText>
					Lorem ipsum dolor sit amet. Sed placeat neque qui minima
					repellendus et dolores dicta eum ipsum beatae? Non inventore
					autem vel libero error est esse recusandae qui soluta neque.
				</MyText>
			</Pane>
			<Pane display="flex" justifyContent="space-between">
				<Pane
					paddingRight={20}
					alignItems="center"
					gap={20}
					display="flex"
					borderRight="1px solid var(--stroke-block)"
				>
					<Service />
					<Pane>
						<MyHeading>24</MyHeading>
						<MyText>Sub-services</MyText>
					</Pane>
				</Pane>
				<Pane
					paddingRight={20}
					alignItems="center"
					gap={20}
					display="flex"
					borderRight="1px solid var(--stroke-block)"
				>
					<Card />
					<Pane>
						<MyHeading>6</MyHeading>
						<MyText>Payment methods</MyText>
					</Pane>
				</Pane>
				<Pane
					paddingRight={20}
					alignItems="center"
					gap={20}
					display="flex"
					borderRight="1px solid var(--stroke-block)"
				>
					<Safety />
					<Pane>
						<MyHeading>Safety</MyHeading>
						<MyText>
							Delete data at any time <br /> your data is safe
						</MyText>
					</Pane>
				</Pane>
			</Pane>
		</Pane>
		<Pane gap={15} display="flex">
			<Pane
				border="1px solid var(--white)"
				className={styles.block}
				alignItems="center"
				display="flex"
				flexDirection="column"
				borderRadius={6}
				backgroundColor="var(--white)"
				padding={45}
			>
				<img src={bank} alt="bank" />
				<MyHeading
					fontSize={21}
					fontWeight={600}
					marginBottom={20}
					marginTop={30}
				>
					Bank Details
				</MyHeading>
				<MyText>
					Please set up your account setting to receive money
				</MyText>
				<Link to="bank">
					<MyButton marginTop={60} small="true" appearance="primary">
						Fill up
					</MyButton>
				</Link>
			</Pane>
			<Pane
				border="1px solid var(--white)"
				className={styles.block}
				alignItems="center"
				display="flex"
				flexDirection="column"
				borderRadius={6}
				backgroundColor="var(--white)"
				padding={45}
			>
				<img src={payment} alt="payment" />
				<MyHeading
					fontSize={21}
					fontWeight={600}
					marginBottom={20}
					marginTop={30}
				>
					Select Payment
				</MyHeading>
				<MyText>
					Please set up your account setting to receive money
				</MyText>
				<Link to="select">
					<MyButton marginTop={60} small="true" appearance="primary">
						Fill up
					</MyButton>
				</Link>
			</Pane>
			<Pane
				border="1px solid var(--white)"
				className={styles.block}
				alignItems="center"
				display="flex"
				flexDirection="column"
				borderRadius={6}
				backgroundColor="var(--white)"
				padding={45}
			>
				<img src={connect} alt="connect" />
				<MyHeading
					fontSize={21}
					fontWeight={600}
					marginBottom={20}
					marginTop={30}
				>
					Connect Payments
				</MyHeading>
				<MyText>
					Please set up your account setting to receive money
				</MyText>
				<MyButton marginTop={60} small="true" appearance="primary">
					Fill up
				</MyButton>
			</Pane>
		</Pane>
	</Pane>
)

export default Payment
