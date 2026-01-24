
import Airtable from "airtable";

const apiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
const baseId = import.meta.env.VITE_AIRTABLE_BASE_ID;

const base = new Airtable({ apiKey: apiKey }).base(baseId);

export const submitToAirtable = async (table: string, fields: Record<string, any>) => {
    if (!apiKey || !baseId) {
        console.error("Airtable configuration missing");
        throw new Error("Configuration Error: Airtable credentials missing.");
    }

    try {
        // Attempt to fetch IP address
        let ipAddress = 'Unknown';
        try {
            const ipRes = await fetch('https://api.ipify.org?format=json');
            if (ipRes.ok) {
                const ipData = await ipRes.json();
                ipAddress = ipData.ip;
            }
        } catch (e) {
            console.warn("Could not fetch IP address", e);
        }

        console.log(`[Airtable Debug] IP Address resolved to: "${ipAddress}"`);
        const timestamp = new Date().toISOString();
        console.log(`[Airtable Debug] Timestamp generated: "${timestamp}"`);

        const payload = {
            ...fields,
            "IP Address": ipAddress,
            "Client Timestamp": timestamp,
        };

        // Explicitly check keys
        console.log(`[Airtable Debug] Payload Keys:`, Object.keys(payload));
        console.log(`[Airtable Debug] Submitting to ${table} (FULL OBJECT):`, JSON.stringify(payload)); // Stringify to ensure we see everything

        const records = await base(table).create([
            {
                fields: payload
            }
        ], { typecast: true });

        console.log(`[Airtable Debug] Success:`, records.map(r => r.id));
        return true;
    } catch (error: any) {
        console.error(`[Airtable Debug] Error submitting to ${table}:`, error);
        // Log detailed error if available from Airtable
        if (error.error) console.error("[Airtable Debug] Details:", error.error);
        throw new Error(error.message || "Something went wrong sending data to Airtable.");
    }
};
