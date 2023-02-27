import ContentLoader from "react-content-loader"
import { PropsWithChildren } from "react"

const Skeleton = (props: PropsWithChildren) => (
	<>
		{Array.from({length: 5}, (_, i) => (
			<ContentLoader
				key={i}
				speed={2}
				width={330}
				height={86.5}
				viewBox="0 0 330 86.5"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
				{...props}
			>
				<rect x="91" y="57" rx="3" ry="3" width="120" height="8" />
				<rect x="99" y="36" rx="3" ry="3" width="62" height="7" />
				<circle cx="39" cy="44" r="30" />
				<circle cx="302" cy="60" r="9" />
				<rect x="512" y="24" rx="3" ry="3" width="33" height="11" />
				<rect x="282" y="31" rx="3" ry="3" width="33" height="14" />
			</ContentLoader>
		))}
	</>
)

export default Skeleton