import { Dialog, Pane, Textarea } from "evergreen-ui"
import { LazyLoadImage } from "react-lazy-load-image-component"

import MyText from "components/text"
import { placeholder } from "../../../../utils/imagePlaceholder"

export const Detail = ({ data, value, setValue }: any) => {
	return (
		<Pane>
			<Dialog
				isShown={value}
				title="Service"
				onCloseComplete={() => setValue(false)}
				footer={<Pane />}
			>
				<Pane>
					<Pane marginBottom={24}>
						<LazyLoadImage
							width="171px"
							effect="blur"
							height="178px"
							alt="picture"
							placeholderSrc={placeholder}
							src={data.pictureUrl}
						/>
					</Pane>

					<Pane>
						<MyText>Description</MyText>
						<Textarea
							name="description"
							disabled
							value={data.description}
						/>
					</Pane>
				</Pane>
			</Dialog>
		</Pane>
	)
}
