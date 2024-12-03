"use client";
import { useT } from "@/hooks";
import { Warning as WarningIcon } from "@mui/icons-material";
import {
	Box,
	Button,
	type ButtonProps,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	type DialogProps,
	DialogTitle,
	Typography,
} from "@mui/material";
import type { ReactNode } from "react";
import type React from "react";

export const WrappedDialog: React.FC<WrappedDialogProps> = ({
	open,
	onClose,
	onConfirm,
	title,
	content,
	isWarning = false,
}) => {
	const { t } = useT();

	return (
		<Dialog open={open} onClose={onClose}>
			<DialogTitle sx={{ display: "flex", alignItems: "center", gap: 1 }}>
				{isWarning ? <WarningIcon color="warning" /> : <></>}
				<Typography component="div" variant="h6">
					{title}
				</Typography>
			</DialogTitle>
			<DialogContent>
				{isWarning ? (
					<>
						<Box sx={{ mb: 2 }}>
							<DialogContentText>
								{t("dialog.deleting-items")}
							</DialogContentText>
							<Typography
								variant="subtitle1"
								color="error"
								sx={{ mt: 1, whiteSpace: "pre-line", fontWeight: "bold" }}
							>
								{content}
							</Typography>
						</Box>
						<DialogContentText color="warning.main" sx={{ fontWeight: "bold" }}>
							{t("dialog.warning-cannot-undo")}
						</DialogContentText>
					</>
				) : (
					<DialogContentText id="confirm-dialog-description">
						{content}
					</DialogContentText>
				)}
			</DialogContent>
			<DialogActions>
				<Button onClick={onClose}>{t("button.cancel")}</Button>
				{isWarning ? (
					<Button
						onClick={onConfirm}
						color="error"
						startIcon={<WarningIcon />}
						variant="contained"
					>
						{t("button.confirm")}
					</Button>
				) : (
					<Button onClick={onConfirm} variant="contained">
						{t("button.confirm")}
					</Button>
				)}
			</DialogActions>
		</Dialog>
	);
};

export type WrappedDialogProps = Readonly<{
	open: DialogProps["open"];
	onClose: () => void;
	onConfirm: ButtonProps["onClick"];
	title: ReactNode;
	content: ReactNode;
	isWarning?: boolean;
}>;
