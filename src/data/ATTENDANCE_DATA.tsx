import image from "../../bhaskar.jpg";

const ATTENDANCE_DATA = {
    employee: {
      id: 1,
      name: "Bhaskar Sharma",
      role: "Sales Manager",
      department: "Sales Dept.",
      image:image
    },
    attendanceRecords: Array(13)
      .fill(null)
      .map((_, index) => ({
        id: 31 - index,
        date: `${31 - index}-Jun-2025`,
        dayType: "M",
        timePlanned: "09:00 AM - 06:30 PM",
        actualTime: "09:32 PM",
        overtime: "06:01 H",
        fineBonus: "+500",
        errors: ["late", "warning"],
        calAtt: "P + WO + LT",
        finalAtt: "P + WO + LT",
      })),
    employeeList: Array(15)
      .fill(null)
      .map((_, index) => ({
        id: index + 1,
        name: "Bhaskar Sharma",
        role: "Sales Manager",
        department: "Sales Dept.",
image:image      })),
    };
    type ErrorType = "location" | "late" | "user";

    const data: {
        id: number;
        day: string;
        date: string;
        timePlanned: string;
        workHours: string;
        actualTime: string;
        overtime: string;
        fineBonus: string;
        bonusExtra: string;
        errors: ErrorType[];
        calAtt: string;
        finalAtt: string;
        links: number;
        messages: number;
        overtimeNote?: string;
      }[] = [
        {
          id: 1,
          day: "M",
          date: "31-Jun-2025",
          timePlanned: "09:00 AM - 06:30 PM",
          workHours: "09:00 H",
          actualTime: "09:01 AM - 06:32 PM",
          overtime: "09:01 H",
          fineBonus: "+₹500",
          bonusExtra: "+₹900",
          errors: [],
          calAtt: "P",
          finalAtt: "P",
          links: 3,
          messages: 3,
        },
        {
          id: 2,
          day: "W",
          date: "29-Jun-2025",
          timePlanned: "09:00 AM - 06:30 PM",
          workHours: "09:00 H",
          actualTime: "09:01 AM - 02:32 PM",
          overtime: "04:01 H",
          fineBonus: "+₹500",
          bonusExtra: "+₹900",
          errors: ["location", "late"],
          calAtt: "P",
          finalAtt: "HD",
          links: 3,
          messages: 3,
          overtimeNote: "09:01 H",
        },
        {
          id: 3,
          day: "T",
          date: "28-Jun-2025",
          timePlanned: "09:00 AM - 06:30 PM",
          workHours: "09:00 H",
          actualTime: "09:01 AM - 09:32 PM",
          overtime: "12:01 H",
          fineBonus: "+₹500",
          bonusExtra: "+₹900",
          errors: ["late", "user"],
          calAtt: "P + OT",
          finalAtt: "P + OT",
          links: 3,
          messages: 3,
          overtimeNote: "09:01 H",
        },
        {
          id: 4,
          day: "M",
          date: "31-Jun-2025",
          timePlanned: "09:00 AM - 06:30 PM",
          workHours: "09:00 H",
          actualTime: "09:01 AM - 06:32 PM",
          overtime: "09:01 H",
          fineBonus: "+₹500",
          bonusExtra: "+₹900",
          errors: [],
          calAtt: "P",
          finalAtt: "P",
          links: 3,
          messages: 3,
        },
        {
          id: 5,
          day: "W",
          date: "29-Jun-2025",
          timePlanned: "09:00 AM - 06:30 PM",
          workHours: "09:00 H",
          actualTime: "09:01 AM - 02:32 PM",
          overtime: "04:01 H",
          fineBonus: "+₹500",
          bonusExtra: "+₹900",
          errors: ["location", "late"],
          calAtt: "P",
          finalAtt: "HD",
          links: 3,
          messages: 3,
          overtimeNote: "09:01 H",
        },
        {
          id: 6,
          day: "T",
          date: "28-Jun-2025",
          timePlanned: "09:00 AM - 06:30 PM",
          workHours: "09:00 H",
          actualTime: "09:01 AM - 09:32 PM",
          overtime: "12:01 H",
          fineBonus: "+₹500",
          bonusExtra: "+₹900",
          errors: ["late", "user"],
          calAtt: "P + OT",
          finalAtt: "P + OT",
          links: 3,
          messages: 3,
          overtimeNote: "09:01 H",
        },
        {
          id: 7,
          day: "M",
          date: "31-Jun-2025",
          timePlanned: "09:00 AM - 06:30 PM",
          workHours: "09:00 H",
          actualTime: "09:01 AM - 06:32 PM",
          overtime: "09:01 H",
          fineBonus: "+₹500",
          bonusExtra: "+₹900",
          errors: [],
          calAtt: "P",
          finalAtt: "P",
          links: 3,
          messages: 3,
        },
        {
          id: 8,
          day: "W",
          date: "29-Jun-2025",
          timePlanned: "09:00 AM - 06:30 PM",
          workHours: "09:00 H",
          actualTime: "09:01 AM - 02:32 PM",
          overtime: "04:01 H",
          fineBonus: "+₹500",
          bonusExtra: "+₹900",
          errors: ["location", "late"],
          calAtt: "P",
          finalAtt: "HD",
          links: 3,
          messages: 3,
          overtimeNote: "09:01 H",
        },
        {
          id: 9,
          day: "T",
          date: "28-Jun-2025",
          timePlanned: "09:00 AM - 06:30 PM",
          workHours: "09:00 H",
          actualTime: "09:01 AM - 09:32 PM",
          overtime: "12:01 H",
          fineBonus: "+₹500",
          bonusExtra: "+₹900",
          errors: ["late", "user"],
          calAtt: "P + OT",
          finalAtt: "P + OT",
          links: 3,
          messages: 3,
          overtimeNote: "09:01 H",
        },
        {
            id: 10,
            day: "M",
            date: "31-Jun-2025",
            timePlanned: "09:00 AM - 06:30 PM",
            workHours: "09:00 H",
            actualTime: "09:01 AM - 06:32 PM",
            overtime: "09:01 H",
            fineBonus: "+₹500",
            bonusExtra: "+₹900",
            errors: [],
            calAtt: "P",
            finalAtt: "P",
            links: 3,
            messages: 3,
          },
          {
            id: 11,
            day: "W",
            date: "29-Jun-2025",
            timePlanned: "09:00 AM - 06:30 PM",
            workHours: "09:00 H",
            actualTime: "09:01 AM - 02:32 PM",
            overtime: "04:01 H",
            fineBonus: "+₹500",
            bonusExtra: "+₹900",
            errors: ["location", "late"],
            calAtt: "P",
            finalAtt: "HD",
            links: 3,
            messages: 3,
            overtimeNote: "09:01 H",
          },
          {
            id: 12,
            day: "T",
            date: "28-Jun-2025",
            timePlanned: "09:00 AM - 06:30 PM",
            workHours: "09:00 H",
            actualTime: "09:01 AM - 09:32 PM",
            overtime: "12:01 H",
            fineBonus: "+₹500",
            bonusExtra: "+₹900",
            errors: ["late", "user"],
            calAtt: "P + OT",
            finalAtt: "P + OT",
            links: 3,
            messages: 3,
            overtimeNote: "09:01 H",
          },
      ];
  export { ATTENDANCE_DATA, data };