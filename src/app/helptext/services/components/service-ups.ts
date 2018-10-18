import { T } from '../../../translate-marker';
import { Validators } from '@angular/forms';

export default {
    ups_mode_placeholder : T('UPS Mode'),
    ups_mode_tooltip : T('Choose <i>Master</i> if the UPS is plugged directly\
                     into the system serial port. The UPS will remain the\
                     last item to shut down. Choose <i>Slave</i> to have\
                     this system shut down before <i>Master</i>. See the\
                     <a href="http://networkupstools.org/docs/user-manual.chunked/ar01s02.html#_monitoring_client"\
                     target="_blank">Network UPS Tools Overview</a>.'),
    ups_mode_options : [
          {label : 'Master', value : 'master'},
          {label : 'Slave', value : 'slave'},
        ],

    ups_identifier_placeholder : T('Identifier'),
    ups_identifier_tooltip : T('Describe the UPS device. It can contain alphanumeric,\
                     period, comma, hyphen, and underscore characters.'),
    ups_identifier_validation : [ Validators.required, Validators.pattern(/^[\w|,|\.|\-|_]+$/) ],

    ups_driver_placeholder : T('Driver'),
    ups_driver_tooltip : T('See the <a\
                     href="http://networkupstools.org/stable-hcl.html"\
                     target="_blank">Network UPS Tools compatibility\
                     list</a> for a list of supported UPS devices.'),
    ups_driver_validation : [ Validators.required ],

    ups_port_placeholder : T('Port'),
    ups_port_tooltip : T('Enter the serial or USB port the UPS is plugged into.'),
    ups_port_validation : [ Validators.required ],

    ups_hostname_placeholder: T('Hostname'),
    ups_hostname_tooltip: T('Enter the IP address or hostname for SNMP UPS.'),

    ups_options_placeholder : T('Auxiliary Parameters (ups.conf)'),
    ups_options_tooltip : T('Enter any extra options from <a\
                     href="http://networkupstools.org/docs/man/ups.conf.html"\
                     target="_blank">UPS.CONF(5)</a>.'),

    ups_optionsupsd_placeholder : T('Auxiliary Parameters (upsd.conf)'),
    ups_optionsupsd_tooltip : T('Enter any extra options from <a\
                     href="http://networkupstools.org/docs/man/upsd.conf.html"\
                     target="_blank">UPSD.CONF(5)</a>.'),

    ups_description_placeholder : T('Description'),
    ups_description_tooltip : T('Describe this service.'),

    ups_shutdown_placeholder : T('Shutdown Mode'),
    ups_shutdown_tooltip : T('Choose when the UPS initiates shutdown.'),
    ups_shutdown_options : [
          {label : 'UPS reaches low battery', value : 'lowbatt'},
          {label : 'UPS goes on battery', value : 'batt'},
        ],

    ups_shutdowntimer_placeholder : T('Shutdown Timer'),
    ups_shutdowntimer_tooltip : T('Enter a value in seconds for the the UPS to wait\
                     before initiating shutdown. Shutdown will not occur\
                     if power is restored while the timer is counting\
                     down. This value only applies when <b>Shutdown\
                     mode</b> is set to <i>UPS goes on battery</i>.'),

    ups_shutdowncmd_placeholder : T('Shutdown Command'),
    ups_shutdowncmd_tooltip : T('Enter a command to shut down the system when either\
                     battery power is low or the shutdown timer ends.'),
    ups_shutdowncmd_validation : [ Validators.required ],

    ups_nocommwarntime_placeholder: T('No Communication Warning Time'),
    ups_nocommwarntime_tooltip: T('Enter a number of seconds to wait before alerting that\
                    the service cannot reach any UPS. Warnings continue\
                    until the situation is fixed.'),
    ups_nocommwarntime_value: `300`,

    ups_monuser_placeholder : T('Monitor User'),
    ups_monuser_tooltip : T('Enter a user to associate with this service. Keeping\
                     the default is recommended.'),
    ups_monuser_validation : [ Validators.required ],

    ups_monpwd_placeholder : T('Monitor Password'),
    ups_monpwd_tooltip : T('Change the default password to improve system\
                     security. The new password cannot contain a\
                     space or <b>#</b>.'),
    ups_monpwd_validation: [Validators.pattern(/^((?![\#|\s]).)*$/)],

    ups_extrausers_placeholder : T('Extra Users(upsd.conf)'),
    ups_extrausers_tooltip : T('Enter accounts that have administrative access.\
                     See <a\
                     href="http://networkupstools.org/docs/man/upsd.users.html"\
                     target="_blank">upsd.users(5)</a> for examples.'),

    ups_rmonitor_placeholder : T('Remote Monitor'),
    ups_rmonitor_tooltip : T('Set for the default configuration to listen on all\
                     interfaces using the known values of user:\
                     <i>upsmon</i> and password: <i>fixmepass</i>.'),

    ups_emailnotify_placeholder : T('Send Email Status Updates'),
    ups_emailnotify_tooltip : T('Set enable sending messages to the address defined in\
                     the <b>Email</b> field.'),

    ups_toemail_placeholder : T('Email'),
    ups_toemail_tooltip : T('Enter any email addresses to receive status updates.\
                     Separate multiple addresses with a <b>;</b> .'),

    ups_subject_placeholder : T('Email Subject'),
    ups_subject_tooltip : T('Enter the subject for status emails.'),

    ups_powerdown_placeholder : T('Power Off UPS'),
    ups_powerdown_tooltip : T('Set for the UPS to power off after shutting down the\
                     system.'),
}