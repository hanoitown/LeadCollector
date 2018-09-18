export class Guest {
  name: string = "";
  phone: string = "";
  note: string = "";
  // dob: Date = null;
  gender: string = "";
  email: string = "";
}

export class GuestResult{
  count: number = 0;
  items: Guest[];
}