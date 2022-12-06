#!/usr/bin/env bash

if [ $# -eq 0 ]; then
    echo "Entering operator-cli container.";
    docker exec -it shardeum-dashboard_cli_1 /bin/bash;
else
    while (( "$#" )); do
        case "$1" in
            c) echo "Entering operator-cli container."
                docker exec -it shardeum-dashboard_cli_1 /bin/bash
                ;;
            g) echo "Entering operator-gui container."
                docker exec -it shardeum-dashboard_gui_1 /bin/bash
                ;;
            v) echo "Entering validator container."
                docker exec -it shardeum-dashboard_validator_1 /bin/bash
                ;;
            *) echo -e "Use ./shell.sh with the following flags."
                echo -e " no flag to enter the cli container."
                echo -e " 'c' flag to enter the cli container."
                echo -e " 'g' flag to enter the gui container."
                echo -e " 'v' flag to enter the validator container."
                ;;
        esac
        shift
    done

fi