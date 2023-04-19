/* eslint-disable react/no-unstable-nested-components */
import { Button, Checkbox, Pane, Popover, SearchInput } from "evergreen-ui"
import styles from "./styles.module.scss"
import { useSearch } from "./useSearch"

interface ISearch {
	officeId: string
}

export const Search = ({ officeId }: ISearch) => {
	const {
		ids,
		data,
		search,
		setIds,
		mutate,
		isLoading,
		handleSearch,
		assignIsLoading,
	} = useSearch(officeId)

	return (
		<Pane className={styles.container}>
			<Popover
				content={({ close }) => (
					<Pane
						width={240}
						height={240}
						display="flex"
						paddingX="20px"
						paddingTop="10px"
						flexDirection="column"
					>
						<Pane flexGrow={1} overflowY="auto">
							{search === ""
								? data?.data.content.map(
										({ id, firstName, lastName }: any) => (
											<Checkbox
												key={id}
												checked={ids.includes(id)}
												label={`${firstName} ${lastName}`}
												onChange={(e) => {
													if (e.target.checked) {
														setIds((prev) => [
															...prev,
															id,
														])
													} else {
														const newIds =
															ids.filter(
																(v) => v !== id,
															)
														setIds(newIds)
													}
												}}
											/>
										),
								  )
								: data?.data.content
										.filter(({ firstName }: any) =>
											firstName.includes(search),
										)
										.map(
											({
												id,
												firstName,
												lastName,
											}: any) => (
												<Checkbox
													key={id}
													checked={ids.includes(id)}
													label={`${firstName} ${lastName}`}
													onChange={(e) => {
														if (e.target.checked) {
															setIds((prev) => [
																...prev,
																id,
															])
														} else {
															const newIds =
																ids.filter(
																	(v) =>
																		v !==
																		id,
																)
															setIds(newIds)
														}
													}}
												/>
											),
										)}
						</Pane>
						<Pane
							marginY="10px"
							display="flex"
							justifyContent="flex-end"
						>
							<Button
								appearance="primary"
								onClick={() => {
									mutate(undefined, {
										onSuccess: () => {
											close()
										},
									})
								}}
								disabled={assignIsLoading || ids.length === 0}
							>
								Save
							</Button>
						</Pane>
					</Pane>
				)}
			>
				<SearchInput
					value={search}
					disabled={isLoading}
					onChange={handleSearch}
					placeholder="Type for searching"
				/>
			</Popover>
		</Pane>
	)
}
