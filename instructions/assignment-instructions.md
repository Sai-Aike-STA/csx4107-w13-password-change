# Password Change Assignment

## Instructions

- Based on the codes from the lab, implement Change User Password feature.
- Only Admin user can see User menu.
- Design and implement appropriate Frontend UI for User management.
- Only password change is required.
- Modify the backend so all request to `/api/item` must be authorized.

## Submission

- Link to the backend and frontend source code repository.
- Link to the working application deployed on Vercel.
- Screen shot to demonstrate that only authorized session can access `/api/item`.
- Screen shot to demonstrate that all item actions are recorded in audit log.

## OneNote cross-reference

The notes below are context from the exported course notebook.

- `Next JS 4/Proxy` protects `/api/item/:path*` and `/api/user/:path*`, rejects
  unauthenticated requests with status 401, and forwards verified user data to
  protected routes through internal request headers.
- `Next JS 4/User API` demonstrates admin-only user listing and creation. Its
  user-creation example hashes passwords with `bcrypt`.
- `Next JS 4/Frontend UI control` demonstrates showing the User menu only for
  the admin user. It also states that frontend UI control is not security and
  that authorization must be enforced by the backend.
