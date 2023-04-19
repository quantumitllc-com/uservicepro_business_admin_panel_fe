import React from "react"
import { Pane, Tablist, Tab } from "evergreen-ui"

import { Spinner } from "components/spinner"
import { IPlan } from "types/dashboard/profile/card"
import Card from "../components/card"
import { usePlans } from "./usePlans"

const Plans = () => {
	const { data, selectedIndex, isLoading, setSelectedIndex, tabs } =
		usePlans()

	return (
		<Pane>
			<Pane display="flex" justifyContent="center">
				<Tablist marginBottom={24}>
					{tabs.map((tab, index) => (
						<Tab
							aria-controls={`panel-${tab}`}
							isSelected={index === selectedIndex}
							key={tab}
							onSelect={() => setSelectedIndex(index)}
						>
							{tab}
						</Tab>
					))}
				</Tablist>
			</Pane>
			{isLoading ? (
				<Spinner />
			) : (
				<Pane>
					<Pane
						gap={24}
						aria-labelledby="Monthly"
						aria-hidden={selectedIndex !== 0}
						display={selectedIndex === 0 ? "flex" : "none"}
						key="Monthly"
						role="tabpanel"
					>
						{data.data.map(
							({
								pricePerMonth,
								pricePerYear,
								...rest
							}: IPlan) => (
								<Card
									key={rest.id}
									price={pricePerMonth}
									{...rest}
									type="Month"
								/>
							),
						)}
					</Pane>
					<Pane
						gap={24}
						aria-labelledby="Yearly"
						aria-hidden={selectedIndex !== 1}
						display={selectedIndex === 1 ? "flex" : "none"}
						key="Yearly"
						role="tabpanel"
					>
						{data.data.map(
							({
								pricePerMonth,
								pricePerYear,
								...rest
							}: IPlan) => (
								<Card
									isLink
									key={rest.id}
									price={pricePerYear}
									{...rest}
									type="Year"
								/>
							),
						)}
					</Pane>
				</Pane>
			)}
		</Pane>
	)
}

export default Plans
