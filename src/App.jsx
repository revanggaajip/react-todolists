import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import { Card, TextInput, Button, Table } from "flowbite-react";

function App() {
    const [activity, setActivity] = useState("");
    const [activities, setActivities] = useState([]);

    const addActivity = () => {
        if (!activity) {
            alert("Input Activity");
            return;
        }
        const newActivity = {
            id: Math.floor(Math.random() * 1000),
            value: activity,
        };
        setActivities((oldActivity) => [...oldActivity, newActivity]);
        setActivity("");
        console.log(activities);
    };

    const deleteActivity = (id) => {
        const deletedActivity = activities.filter(
            (activity) => activity.id !== id
        );
        setActivities(deletedActivity);
    };

    return (
        <>
            <Card className="w-1/2 mx-auto">
                <div className="flex justify-center">
                    <Header />
                </div>
                <div className="mt-6">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-9">
                            <TextInput
                                sizing="sm"
                                placeholder="Masukkan Aktivitas"
                                onChange={(e) => setActivity(e.target.value)}
                            />
                        </div>
                        <div className="col-span-3">
                            <Button
                                color="success"
                                pill={true}
                                size="sm"
                                onClick={addActivity}
                            >
                                Tambah
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <Table hoverable={true}>
                        <Table.Head>
                            <Table.HeadCell>No</Table.HeadCell>
                            <Table.HeadCell>Id</Table.HeadCell>
                            <Table.HeadCell>Activities</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>
                        </Table.Head>
                        <Table.Body>
                            {activities.map((activity, index) => {
                                return (
                                    <Table.Row key={activity.id}>
                                        <Table.Cell>{index + 1}</Table.Cell>
                                        <Table.Cell>{activity.id}</Table.Cell>
                                        <Table.Cell>
                                            {activity.value}
                                        </Table.Cell>
                                        <Table.Cell>
                                            <Button
                                                className="bg-red-500"
                                                onClick={() => {
                                                    deleteActivity(activity.id);
                                                }}
                                            >
                                                Delete
                                            </Button>
                                        </Table.Cell>
                                    </Table.Row>
                                );
                            })}
                        </Table.Body>
                    </Table>
                </div>
            </Card>
        </>
    );
}

export default App;
