import { SOURCE_CODE_GITHUB } from "@/constants";
import { GitHub as GithubIcon } from "@mui/icons-material";
import {
	Grid2 as Grid,
	IconButton,
	AppBar as MuiAppBar,
	Toolbar,
} from "@mui/material";
import { getServerSession } from "next-auth";
import { AppName } from "./AppName";
import { GoogleSignInButton } from "./GoogleSignInButton";
import { GoogleSignOutButton } from "./GoogleSignOutButton";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const AppBar = async () => {
	const session = await getServerSession();

	return (
		<MuiAppBar
			position="static"
			sx={{
				bgcolor: "grey.900",
				paddingRight: { xs: 0, md: "20%" },
				paddingLeft: { xs: 0, md: "20%" },
			}}
		>
			<Toolbar
				sx={{
					flexDirection: { xs: "column", sm: "row" },
					gap: { xs: 2, sm: 0 },
					padding: {
						xs: 2,
						sm: "0 24px",
					},
					minHeight: {
						xs: "auto",
						sm: "64px",
					},
					display: "flex",
					justifyContent: "space-between",
				}}
			>
				<AppName />

				<Grid container spacing={2}>
					<LanguageSwitcher />
					{session ? <GoogleSignOutButton /> : <GoogleSignInButton />}
					<IconButton
						aria-label="GitHub"
						href={SOURCE_CODE_GITHUB}
						color="inherit"
						sx={{ "@media (max-width: 455px)": { display: "none" } }}
					>
						<GithubIcon />
					</IconButton>
				</Grid>
			</Toolbar>
		</MuiAppBar>
	);
};
