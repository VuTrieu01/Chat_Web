import {
  Avatar,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import StyledOnlineBadge from "../../components/StyledOnlineBadge";

function ChatItem() {
  return (
    <>
      <ListItem disablePadding sx={{ mb: 1, pr: 1 }}>
        <ListItemButton
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            "& .MuiListItemIcon-root": {
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <StyledOnlineBadge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Alice"
                src="https://material-ui.com/static/images/avatar/3.jpg"
                sx={{ width: 45, height: 45 }}
              />
            </StyledOnlineBadge>
          </ListItemIcon>
          <ListItemText sx={{ ml: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Alice
            </Typography>
            <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
              Save 8 pm
            </Typography>
          </ListItemText>
          <ListItemIcon
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="body2">02 Feb</Typography>
            <Typography
              variant="body2"
              fontSize={10}
              fontWeight="bold"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#ff1744",
                color: "background.paper",
                width: 15,
                height: 15,
                p: 0.3,
                mt: 1,
                borderRadius: "50%",
              }}
            >
              99
            </Typography>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>

      {/*Test */}
      <ListItem disablePadding sx={{ mb: 1, pr: 1 }}>
        <ListItemButton
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            "& .MuiListItemIcon-root": {
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <StyledOnlineBadge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Alice"
                src="https://material-ui.com/static/images/avatar/3.jpg"
                sx={{ width: 45, height: 45 }}
              />
            </StyledOnlineBadge>
          </ListItemIcon>
          <ListItemText sx={{ ml: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Alice
            </Typography>
            <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
              Save 8 pm
            </Typography>
          </ListItemText>
          <ListItemIcon
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="body2">02 Feb</Typography>
            <Typography
              variant="body2"
              fontSize={10}
              fontWeight="bold"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#ff1744",
                color: "background.paper",
                width: 15,
                height: 15,
                p: 0.3,
                mt: 1,
                borderRadius: "50%",
              }}
            >
              99
            </Typography>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ mb: 1, pr: 1 }}>
        <ListItemButton
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            "& .MuiListItemIcon-root": {
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <StyledOnlineBadge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Alice"
                src="https://material-ui.com/static/images/avatar/3.jpg"
                sx={{ width: 45, height: 45 }}
              />
            </StyledOnlineBadge>
          </ListItemIcon>
          <ListItemText sx={{ ml: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Alice
            </Typography>
            <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
              Save 8 pm
            </Typography>
          </ListItemText>
          <ListItemIcon
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="body2">02 Feb</Typography>
            <Typography
              variant="body2"
              fontSize={10}
              fontWeight="bold"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#ff1744",
                color: "background.paper",
                width: 15,
                height: 15,
                p: 0.3,
                mt: 1,
                borderRadius: "50%",
              }}
            >
              99
            </Typography>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ mb: 1, pr: 1 }}>
        <ListItemButton
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            "& .MuiListItemIcon-root": {
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <StyledOnlineBadge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Alice"
                src="https://material-ui.com/static/images/avatar/3.jpg"
                sx={{ width: 45, height: 45 }}
              />
            </StyledOnlineBadge>
          </ListItemIcon>
          <ListItemText sx={{ ml: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Alice
            </Typography>
            <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
              Save 8 pm
            </Typography>
          </ListItemText>
          <ListItemIcon
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="body2">02 Feb</Typography>
            <Typography
              variant="body2"
              fontSize={10}
              fontWeight="bold"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#ff1744",
                color: "background.paper",
                width: 15,
                height: 15,
                p: 0.3,
                mt: 1,
                borderRadius: "50%",
              }}
            >
              99
            </Typography>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ mb: 1, pr: 1 }}>
        <ListItemButton
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            "& .MuiListItemIcon-root": {
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <StyledOnlineBadge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Alice"
                src="https://material-ui.com/static/images/avatar/3.jpg"
                sx={{ width: 45, height: 45 }}
              />
            </StyledOnlineBadge>
          </ListItemIcon>
          <ListItemText sx={{ ml: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Alice
            </Typography>
            <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
              Save 8 pm
            </Typography>
          </ListItemText>
          <ListItemIcon
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="body2">02 Feb</Typography>
            <Typography
              variant="body2"
              fontSize={10}
              fontWeight="bold"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#ff1744",
                color: "background.paper",
                width: 15,
                height: 15,
                p: 0.3,
                mt: 1,
                borderRadius: "50%",
              }}
            >
              99
            </Typography>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ mb: 1, pr: 1 }}>
        <ListItemButton
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            "& .MuiListItemIcon-root": {
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <StyledOnlineBadge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Alice"
                src="https://material-ui.com/static/images/avatar/3.jpg"
                sx={{ width: 45, height: 45 }}
              />
            </StyledOnlineBadge>
          </ListItemIcon>
          <ListItemText sx={{ ml: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Alice
            </Typography>
            <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
              Save 8 pm
            </Typography>
          </ListItemText>
          <ListItemIcon
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="body2">02 Feb</Typography>
            <Typography
              variant="body2"
              fontSize={10}
              fontWeight="bold"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#ff1744",
                color: "background.paper",
                width: 15,
                height: 15,
                p: 0.3,
                mt: 1,
                borderRadius: "50%",
              }}
            >
              99
            </Typography>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ mb: 1, pr: 1 }}>
        <ListItemButton
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            "& .MuiListItemIcon-root": {
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <StyledOnlineBadge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Alice"
                src="https://material-ui.com/static/images/avatar/3.jpg"
                sx={{ width: 45, height: 45 }}
              />
            </StyledOnlineBadge>
          </ListItemIcon>
          <ListItemText sx={{ ml: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Alice
            </Typography>
            <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
              Save 8 pm
            </Typography>
          </ListItemText>
          <ListItemIcon
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="body2">02 Feb</Typography>
            <Typography
              variant="body2"
              fontSize={10}
              fontWeight="bold"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#ff1744",
                color: "background.paper",
                width: 15,
                height: 15,
                p: 0.3,
                mt: 1,
                borderRadius: "50%",
              }}
            >
              99
            </Typography>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ mb: 1, pr: 1 }}>
        <ListItemButton
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            "& .MuiListItemIcon-root": {
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <StyledOnlineBadge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Alice"
                src="https://material-ui.com/static/images/avatar/3.jpg"
                sx={{ width: 45, height: 45 }}
              />
            </StyledOnlineBadge>
          </ListItemIcon>
          <ListItemText sx={{ ml: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Alice
            </Typography>
            <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
              Save 8 pm
            </Typography>
          </ListItemText>
          <ListItemIcon
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="body2">02 Feb</Typography>
            <Typography
              variant="body2"
              fontSize={10}
              fontWeight="bold"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#ff1744",
                color: "background.paper",
                width: 15,
                height: 15,
                p: 0.3,
                mt: 1,
                borderRadius: "50%",
              }}
            >
              99
            </Typography>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ mb: 1, pr: 1 }}>
        <ListItemButton
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            "& .MuiListItemIcon-root": {
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <StyledOnlineBadge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Alice"
                src="https://material-ui.com/static/images/avatar/3.jpg"
                sx={{ width: 45, height: 45 }}
              />
            </StyledOnlineBadge>
          </ListItemIcon>
          <ListItemText sx={{ ml: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Alice
            </Typography>
            <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
              Save 8 pm
            </Typography>
          </ListItemText>
          <ListItemIcon
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="body2">02 Feb</Typography>
            <Typography
              variant="body2"
              fontSize={10}
              fontWeight="bold"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#ff1744",
                color: "background.paper",
                width: 15,
                height: 15,
                p: 0.3,
                mt: 1,
                borderRadius: "50%",
              }}
            >
              99
            </Typography>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding sx={{ mb: 1, pr: 1 }}>
        <ListItemButton
          sx={{
            bgcolor: "background.paper",
            borderRadius: 1,
            "& .MuiListItemIcon-root": {
              minWidth: 0,
            },
          }}
        >
          <ListItemIcon>
            <StyledOnlineBadge
              overlap="circular"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              variant="dot"
            >
              <Avatar
                alt="Alice"
                src="https://material-ui.com/static/images/avatar/3.jpg"
                sx={{ width: 45, height: 45 }}
              />
            </StyledOnlineBadge>
          </ListItemIcon>
          <ListItemText sx={{ ml: 2 }}>
            <Typography variant="body1" fontWeight="bold">
              Alice
            </Typography>
            <Typography variant="body2" sx={{ color: "#9e9e9e" }}>
              Save 8 pm
            </Typography>
          </ListItemText>
          <ListItemIcon
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Typography variant="body2">02 Feb</Typography>
            <Typography
              variant="body2"
              fontSize={10}
              fontWeight="bold"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "#ff1744",
                color: "background.paper",
                width: 15,
                height: 15,
                p: 0.3,
                mt: 1,
                borderRadius: "50%",
              }}
            >
              99
            </Typography>
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
    </>
  );
}

export default ChatItem;
