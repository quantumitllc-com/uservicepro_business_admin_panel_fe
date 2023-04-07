import { forwardRef, MouseEvent } from "react"
import { Pane } from "evergreen-ui"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { placeholder } from "utils/imagePlaceholder"

interface ImageTypes {
	src: string
	open: (e: MouseEvent) => void
}

export const Image = forwardRef<any, ImageTypes>(({ src, open }, ref) => {
	return (
		<Pane
			ref={ref}
			onClick={(e: any) => {
				e.stopPropagation()
				open(e)
			}}
		>
			<LazyLoadImage
				width="250px"
				effect="blur"
				height="150px"
				alt="picture"
				placeholderSrc={placeholder}
				onError={(e: any) => {
					e.target.onerror = null
				}}
				src={src}
			/>
		</Pane>
	)
})
