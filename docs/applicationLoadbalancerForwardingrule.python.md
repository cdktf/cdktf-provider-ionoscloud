# `applicationLoadbalancerForwardingrule` Submodule <a name="`applicationLoadbalancerForwardingrule` Submodule" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationLoadbalancerForwardingrule <a name="ApplicationLoadbalancerForwardingrule" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule ionoscloud_application_loadbalancer_forwardingrule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_loadbalancer_id: str,
  datacenter_id: str,
  listener_ip: str,
  listener_port: typing.Union[int, float],
  name: str,
  protocol: str,
  client_timeout: typing.Union[int, float] = None,
  http_rules: typing.Union[IResolvable, typing.List[ApplicationLoadbalancerForwardingruleHttpRules]] = None,
  id: str = None,
  server_certificates: typing.List[str] = None,
  timeouts: ApplicationLoadbalancerForwardingruleTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.applicationLoadbalancerId">application_loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#application_loadbalancer_id ApplicationLoadbalancerForwardingrule#application_loadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#datacenter_id ApplicationLoadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.listenerIp">listener_ip</a></code> | <code>str</code> | Listening (inbound) IP. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | Listening (inbound) port number; valid range is 1 to 65535. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.name">name</a></code> | <code>str</code> | The name of the Application Load Balancer forwarding rule. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Balancing protocol. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.clientTimeout">client_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time in milliseconds to wait for the client to acknowledge or send data; |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.httpRules">http_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>]]</code> | http_rules block. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#id ApplicationLoadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.serverCertificates">server_certificates</a></code> | <code>typing.List[str]</code> | Array of items in the collection. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_loadbalancer_id`<sup>Required</sup> <a name="application_loadbalancer_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.applicationLoadbalancerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#application_loadbalancer_id ApplicationLoadbalancerForwardingrule#application_loadbalancer_id}.

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.datacenterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#datacenter_id ApplicationLoadbalancerForwardingrule#datacenter_id}.

---

##### `listener_ip`<sup>Required</sup> <a name="listener_ip" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.listenerIp"></a>

- *Type:* str

Listening (inbound) IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#listener_ip ApplicationLoadbalancerForwardingrule#listener_ip}

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.listenerPort"></a>

- *Type:* typing.Union[int, float]

Listening (inbound) port number; valid range is 1 to 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#listener_port ApplicationLoadbalancerForwardingrule#listener_port}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.name"></a>

- *Type:* str

The name of the Application Load Balancer forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#name ApplicationLoadbalancerForwardingrule#name}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.protocol"></a>

- *Type:* str

Balancing protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#protocol ApplicationLoadbalancerForwardingrule#protocol}

---

##### `client_timeout`<sup>Optional</sup> <a name="client_timeout" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.clientTimeout"></a>

- *Type:* typing.Union[int, float]

The maximum time in milliseconds to wait for the client to acknowledge or send data;

default is 50,000 (50 seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#client_timeout ApplicationLoadbalancerForwardingrule#client_timeout}

---

##### `http_rules`<sup>Optional</sup> <a name="http_rules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.httpRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>]]

http_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#http_rules ApplicationLoadbalancerForwardingrule#http_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#id ApplicationLoadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `server_certificates`<sup>Optional</sup> <a name="server_certificates" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.serverCertificates"></a>

- *Type:* typing.List[str]

Array of items in the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#server_certificates ApplicationLoadbalancerForwardingrule#server_certificates}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#timeouts ApplicationLoadbalancerForwardingrule#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putHttpRules">put_http_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetClientTimeout">reset_client_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetHttpRules">reset_http_rules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetServerCertificates">reset_server_certificates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_http_rules` <a name="put_http_rules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putHttpRules"></a>

```python
def put_http_rules(
  value: typing.Union[IResolvable, typing.List[ApplicationLoadbalancerForwardingruleHttpRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putHttpRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#create ApplicationLoadbalancerForwardingrule#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#default ApplicationLoadbalancerForwardingrule#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#delete ApplicationLoadbalancerForwardingrule#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#update ApplicationLoadbalancerForwardingrule#update}.

---

##### `reset_client_timeout` <a name="reset_client_timeout" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetClientTimeout"></a>

```python
def reset_client_timeout() -> None
```

##### `reset_http_rules` <a name="reset_http_rules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetHttpRules"></a>

```python
def reset_http_rules() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_server_certificates` <a name="reset_server_certificates" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetServerCertificates"></a>

```python
def reset_server_certificates() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ApplicationLoadbalancerForwardingrule resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ApplicationLoadbalancerForwardingrule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ApplicationLoadbalancerForwardingrule to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ApplicationLoadbalancerForwardingrule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationLoadbalancerForwardingrule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.httpRules">http_rules</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList">ApplicationLoadbalancerForwardingruleHttpRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference">ApplicationLoadbalancerForwardingruleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerIdInput">application_loadbalancer_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.clientTimeoutInput">client_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.httpRulesInput">http_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerIpInput">listener_ip_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerPortInput">listener_port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.serverCertificatesInput">server_certificates_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerId">application_loadbalancer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.clientTimeout">client_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerIp">listener_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.serverCertificates">server_certificates</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `http_rules`<sup>Required</sup> <a name="http_rules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.httpRules"></a>

```python
http_rules: ApplicationLoadbalancerForwardingruleHttpRulesList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList">ApplicationLoadbalancerForwardingruleHttpRulesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.timeouts"></a>

```python
timeouts: ApplicationLoadbalancerForwardingruleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference">ApplicationLoadbalancerForwardingruleTimeoutsOutputReference</a>

---

##### `application_loadbalancer_id_input`<sup>Optional</sup> <a name="application_loadbalancer_id_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerIdInput"></a>

```python
application_loadbalancer_id_input: str
```

- *Type:* str

---

##### `client_timeout_input`<sup>Optional</sup> <a name="client_timeout_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.clientTimeoutInput"></a>

```python
client_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `http_rules_input`<sup>Optional</sup> <a name="http_rules_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.httpRulesInput"></a>

```python
http_rules_input: typing.Union[IResolvable, typing.List[ApplicationLoadbalancerForwardingruleHttpRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `listener_ip_input`<sup>Optional</sup> <a name="listener_ip_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerIpInput"></a>

```python
listener_ip_input: str
```

- *Type:* str

---

##### `listener_port_input`<sup>Optional</sup> <a name="listener_port_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerPortInput"></a>

```python
listener_port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `server_certificates_input`<sup>Optional</sup> <a name="server_certificates_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.serverCertificatesInput"></a>

```python
server_certificates_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ApplicationLoadbalancerForwardingruleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a>]

---

##### `application_loadbalancer_id`<sup>Required</sup> <a name="application_loadbalancer_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.applicationLoadbalancerId"></a>

```python
application_loadbalancer_id: str
```

- *Type:* str

---

##### `client_timeout`<sup>Required</sup> <a name="client_timeout" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.clientTimeout"></a>

```python
client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `listener_ip`<sup>Required</sup> <a name="listener_ip" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerIp"></a>

```python
listener_ip: str
```

- *Type:* str

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `server_certificates`<sup>Required</sup> <a name="server_certificates" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.serverCertificates"></a>

```python
server_certificates: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingrule.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationLoadbalancerForwardingruleConfig <a name="ApplicationLoadbalancerForwardingruleConfig" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  application_loadbalancer_id: str,
  datacenter_id: str,
  listener_ip: str,
  listener_port: typing.Union[int, float],
  name: str,
  protocol: str,
  client_timeout: typing.Union[int, float] = None,
  http_rules: typing.Union[IResolvable, typing.List[ApplicationLoadbalancerForwardingruleHttpRules]] = None,
  id: str = None,
  server_certificates: typing.List[str] = None,
  timeouts: ApplicationLoadbalancerForwardingruleTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.applicationLoadbalancerId">application_loadbalancer_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#application_loadbalancer_id ApplicationLoadbalancerForwardingrule#application_loadbalancer_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.datacenterId">datacenter_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#datacenter_id ApplicationLoadbalancerForwardingrule#datacenter_id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.listenerIp">listener_ip</a></code> | <code>str</code> | Listening (inbound) IP. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | Listening (inbound) port number; valid range is 1 to 65535. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.name">name</a></code> | <code>str</code> | The name of the Application Load Balancer forwarding rule. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.protocol">protocol</a></code> | <code>str</code> | Balancing protocol. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.clientTimeout">client_timeout</a></code> | <code>typing.Union[int, float]</code> | The maximum time in milliseconds to wait for the client to acknowledge or send data; |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.httpRules">http_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>]]</code> | http_rules block. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#id ApplicationLoadbalancerForwardingrule#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.serverCertificates">server_certificates</a></code> | <code>typing.List[str]</code> | Array of items in the collection. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `application_loadbalancer_id`<sup>Required</sup> <a name="application_loadbalancer_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.applicationLoadbalancerId"></a>

```python
application_loadbalancer_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#application_loadbalancer_id ApplicationLoadbalancerForwardingrule#application_loadbalancer_id}.

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#datacenter_id ApplicationLoadbalancerForwardingrule#datacenter_id}.

---

##### `listener_ip`<sup>Required</sup> <a name="listener_ip" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.listenerIp"></a>

```python
listener_ip: str
```

- *Type:* str

Listening (inbound) IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#listener_ip ApplicationLoadbalancerForwardingrule#listener_ip}

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Listening (inbound) port number; valid range is 1 to 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#listener_port ApplicationLoadbalancerForwardingrule#listener_port}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The name of the Application Load Balancer forwarding rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#name ApplicationLoadbalancerForwardingrule#name}

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Balancing protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#protocol ApplicationLoadbalancerForwardingrule#protocol}

---

##### `client_timeout`<sup>Optional</sup> <a name="client_timeout" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.clientTimeout"></a>

```python
client_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The maximum time in milliseconds to wait for the client to acknowledge or send data;

default is 50,000 (50 seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#client_timeout ApplicationLoadbalancerForwardingrule#client_timeout}

---

##### `http_rules`<sup>Optional</sup> <a name="http_rules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.httpRules"></a>

```python
http_rules: typing.Union[IResolvable, typing.List[ApplicationLoadbalancerForwardingruleHttpRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>]]

http_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#http_rules ApplicationLoadbalancerForwardingrule#http_rules}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#id ApplicationLoadbalancerForwardingrule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `server_certificates`<sup>Optional</sup> <a name="server_certificates" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.serverCertificates"></a>

```python
server_certificates: typing.List[str]
```

- *Type:* typing.List[str]

Array of items in the collection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#server_certificates ApplicationLoadbalancerForwardingrule#server_certificates}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleConfig.property.timeouts"></a>

```python
timeouts: ApplicationLoadbalancerForwardingruleTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#timeouts ApplicationLoadbalancerForwardingrule#timeouts}

---

### ApplicationLoadbalancerForwardingruleHttpRules <a name="ApplicationLoadbalancerForwardingruleHttpRules" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules(
  name: str,
  type: str,
  conditions: typing.Union[IResolvable, typing.List[ApplicationLoadbalancerForwardingruleHttpRulesConditions]] = None,
  content_type: str = None,
  drop_query: typing.Union[bool, IResolvable] = None,
  location: str = None,
  response_message: str = None,
  status_code: typing.Union[int, float] = None,
  target_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.name">name</a></code> | <code>str</code> | The unique name of the Application Load Balancer HTTP rule. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.type">type</a></code> | <code>str</code> | Type of the HTTP rule. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.conditions">conditions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>]]</code> | conditions block. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.contentType">content_type</a></code> | <code>str</code> | Valid only for STATIC actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.dropQuery">drop_query</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Default is false; valid only for REDIRECT actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.location">location</a></code> | <code>str</code> | The location for redirecting; mandatory and valid only for REDIRECT actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.responseMessage">response_message</a></code> | <code>str</code> | The response message of the request; mandatory for STATIC actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | Valid only for REDIRECT and STATIC actions. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.targetGroup">target_group</a></code> | <code>str</code> | The ID of the target group; mandatory and only valid for FORWARD actions. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.name"></a>

```python
name: str
```

- *Type:* str

The unique name of the Application Load Balancer HTTP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#name ApplicationLoadbalancerForwardingrule#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the HTTP rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#type ApplicationLoadbalancerForwardingrule#type}

---

##### `conditions`<sup>Optional</sup> <a name="conditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.conditions"></a>

```python
conditions: typing.Union[IResolvable, typing.List[ApplicationLoadbalancerForwardingruleHttpRulesConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>]]

conditions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#conditions ApplicationLoadbalancerForwardingrule#conditions}

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Valid only for STATIC actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#content_type ApplicationLoadbalancerForwardingrule#content_type}

---

##### `drop_query`<sup>Optional</sup> <a name="drop_query" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.dropQuery"></a>

```python
drop_query: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Default is false; valid only for REDIRECT actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#drop_query ApplicationLoadbalancerForwardingrule#drop_query}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.location"></a>

```python
location: str
```

- *Type:* str

The location for redirecting; mandatory and valid only for REDIRECT actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#location ApplicationLoadbalancerForwardingrule#location}

---

##### `response_message`<sup>Optional</sup> <a name="response_message" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.responseMessage"></a>

```python
response_message: str
```

- *Type:* str

The response message of the request; mandatory for STATIC actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#response_message ApplicationLoadbalancerForwardingrule#response_message}

---

##### `status_code`<sup>Optional</sup> <a name="status_code" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Valid only for REDIRECT and STATIC actions.

For REDIRECT actions, default is 301 and possible values are 301, 302, 303, 307, and 308. For STATIC actions, default is 503 and valid range is 200 to 599.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#status_code ApplicationLoadbalancerForwardingrule#status_code}

---

##### `target_group`<sup>Optional</sup> <a name="target_group" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules.property.targetGroup"></a>

```python
target_group: str
```

- *Type:* str

The ID of the target group; mandatory and only valid for FORWARD actions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#target_group ApplicationLoadbalancerForwardingrule#target_group}

---

### ApplicationLoadbalancerForwardingruleHttpRulesConditions <a name="ApplicationLoadbalancerForwardingruleHttpRulesConditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions(
  type: str,
  condition: str = None,
  key: str = None,
  negate: typing.Union[bool, IResolvable] = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.type">type</a></code> | <code>str</code> | Type of the HTTP rule condition. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.condition">condition</a></code> | <code>str</code> | Matching rule for the HTTP rule condition attribute; |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.key">key</a></code> | <code>str</code> | Must be null when type is PATH, METHOD, HOST, or SOURCE_IP. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the condition is negated or not; the default is False. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.value">value</a></code> | <code>str</code> | Mandatory for conditions CONTAINS, EQUALS, MATCHES, STARTS_WITH, ENDS_WITH; |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.type"></a>

```python
type: str
```

- *Type:* str

Type of the HTTP rule condition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#type ApplicationLoadbalancerForwardingrule#type}

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.condition"></a>

```python
condition: str
```

- *Type:* str

Matching rule for the HTTP rule condition attribute;

mandatory for HEADER, PATH, QUERY, METHOD, HOST, and COOKIE types; must be null when type is SOURCE_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#condition ApplicationLoadbalancerForwardingrule#condition}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.key"></a>

```python
key: str
```

- *Type:* str

Must be null when type is PATH, METHOD, HOST, or SOURCE_IP.

Key can only be set when type is COOKIES, HEADER, or QUERY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#key ApplicationLoadbalancerForwardingrule#key}

---

##### `negate`<sup>Optional</sup> <a name="negate" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the condition is negated or not; the default is False.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#negate ApplicationLoadbalancerForwardingrule#negate}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions.property.value"></a>

```python
value: str
```

- *Type:* str

Mandatory for conditions CONTAINS, EQUALS, MATCHES, STARTS_WITH, ENDS_WITH;

must be null when condition is EXISTS; should be a valid CIDR if provided and if type is SOURCE_IP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#value ApplicationLoadbalancerForwardingrule#value}

---

### ApplicationLoadbalancerForwardingruleTimeouts <a name="ApplicationLoadbalancerForwardingruleTimeouts" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#create ApplicationLoadbalancerForwardingrule#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#default ApplicationLoadbalancerForwardingrule#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#delete ApplicationLoadbalancerForwardingrule#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#update ApplicationLoadbalancerForwardingrule#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#create ApplicationLoadbalancerForwardingrule#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#default ApplicationLoadbalancerForwardingrule#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#delete ApplicationLoadbalancerForwardingrule#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.6.0/docs/resources/application_loadbalancer_forwardingrule#update ApplicationLoadbalancerForwardingrule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApplicationLoadbalancerForwardingruleHttpRulesConditionsList <a name="ApplicationLoadbalancerForwardingruleHttpRulesConditionsList" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationLoadbalancerForwardingruleHttpRulesConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>]]

---


### ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference <a name="ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetCondition">reset_condition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetNegate">reset_negate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_condition` <a name="reset_condition" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetCondition"></a>

```python
def reset_condition() -> None
```

##### `reset_key` <a name="reset_key" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_negate` <a name="reset_negate" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetNegate"></a>

```python
def reset_negate() -> None
```

##### `reset_value` <a name="reset_value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.conditionInput">condition_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negateInput">negate_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.condition">condition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negate">negate</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `condition_input`<sup>Optional</sup> <a name="condition_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.conditionInput"></a>

```python
condition_input: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `negate_input`<sup>Optional</sup> <a name="negate_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negateInput"></a>

```python
negate_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.condition"></a>

```python
condition: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `negate`<sup>Required</sup> <a name="negate" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.negate"></a>

```python
negate: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationLoadbalancerForwardingruleHttpRulesConditions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>]

---


### ApplicationLoadbalancerForwardingruleHttpRulesList <a name="ApplicationLoadbalancerForwardingruleHttpRulesList" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ApplicationLoadbalancerForwardingruleHttpRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ApplicationLoadbalancerForwardingruleHttpRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>]]

---


### ApplicationLoadbalancerForwardingruleHttpRulesOutputReference <a name="ApplicationLoadbalancerForwardingruleHttpRulesOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.putConditions">put_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetConditions">reset_conditions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetDropQuery">reset_drop_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetResponseMessage">reset_response_message</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetStatusCode">reset_status_code</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetTargetGroup">reset_target_group</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_conditions` <a name="put_conditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.putConditions"></a>

```python
def put_conditions(
  value: typing.Union[IResolvable, typing.List[ApplicationLoadbalancerForwardingruleHttpRulesConditions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>]]

---

##### `reset_conditions` <a name="reset_conditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetConditions"></a>

```python
def reset_conditions() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```

##### `reset_drop_query` <a name="reset_drop_query" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetDropQuery"></a>

```python
def reset_drop_query() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_response_message` <a name="reset_response_message" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetResponseMessage"></a>

```python
def reset_response_message() -> None
```

##### `reset_status_code` <a name="reset_status_code" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetStatusCode"></a>

```python
def reset_status_code() -> None
```

##### `reset_target_group` <a name="reset_target_group" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.resetTargetGroup"></a>

```python
def reset_target_group() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList">ApplicationLoadbalancerForwardingruleHttpRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditionsInput">conditions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQueryInput">drop_query_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessageInput">response_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCodeInput">status_code_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroupInput">target_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQuery">drop_query</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessage">response_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCode">status_code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroup">target_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditions"></a>

```python
conditions: ApplicationLoadbalancerForwardingruleHttpRulesConditionsList
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditionsList">ApplicationLoadbalancerForwardingruleHttpRulesConditionsList</a>

---

##### `conditions_input`<sup>Optional</sup> <a name="conditions_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.conditionsInput"></a>

```python
conditions_input: typing.Union[IResolvable, typing.List[ApplicationLoadbalancerForwardingruleHttpRulesConditions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesConditions">ApplicationLoadbalancerForwardingruleHttpRulesConditions</a>]]

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `drop_query_input`<sup>Optional</sup> <a name="drop_query_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQueryInput"></a>

```python
drop_query_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `response_message_input`<sup>Optional</sup> <a name="response_message_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessageInput"></a>

```python
response_message_input: str
```

- *Type:* str

---

##### `status_code_input`<sup>Optional</sup> <a name="status_code_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCodeInput"></a>

```python
status_code_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_group_input`<sup>Optional</sup> <a name="target_group_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroupInput"></a>

```python
target_group_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `drop_query`<sup>Required</sup> <a name="drop_query" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.dropQuery"></a>

```python
drop_query: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `response_message`<sup>Required</sup> <a name="response_message" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.responseMessage"></a>

```python
response_message: str
```

- *Type:* str

---

##### `status_code`<sup>Required</sup> <a name="status_code" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.statusCode"></a>

```python
status_code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `target_group`<sup>Required</sup> <a name="target_group" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.targetGroup"></a>

```python
target_group: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationLoadbalancerForwardingruleHttpRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleHttpRules">ApplicationLoadbalancerForwardingruleHttpRules</a>]

---


### ApplicationLoadbalancerForwardingruleTimeoutsOutputReference <a name="ApplicationLoadbalancerForwardingruleTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import application_loadbalancer_forwardingrule

applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ApplicationLoadbalancerForwardingruleTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.applicationLoadbalancerForwardingrule.ApplicationLoadbalancerForwardingruleTimeouts">ApplicationLoadbalancerForwardingruleTimeouts</a>]

---



