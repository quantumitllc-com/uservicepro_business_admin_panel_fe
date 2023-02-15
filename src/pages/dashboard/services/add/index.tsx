import OldbusinessDetail, {
	textObj,
	Breadcrumbs,
} from "pages/dashboard/services/add/oldbusinessDetail"

const AddServices = () => (
	<OldbusinessDetail text={textObj} breadcrumbs={<Breadcrumbs />} />
)

export default AddServices
