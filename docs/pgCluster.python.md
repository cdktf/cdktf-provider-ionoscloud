# `pgCluster` Submodule <a name="`pgCluster` Submodule" id="@cdktf/provider-ionoscloud.pgCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PgCluster <a name="PgCluster" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster"></a>

Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster ionoscloud_pg_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgCluster(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cores: typing.Union[int, float],
  credentials: PgClusterCredentials,
  display_name: str,
  instances: typing.Union[int, float],
  location: str,
  postgres_version: str,
  ram: typing.Union[int, float],
  storage_size: typing.Union[int, float],
  storage_type: str,
  synchronization_mode: str,
  allow_replace: typing.Union[bool, IResolvable] = None,
  backup_location: str = None,
  connection_pooler: PgClusterConnectionPooler = None,
  connections: PgClusterConnections = None,
  from_backup: PgClusterFromBackup = None,
  id: str = None,
  maintenance_window: PgClusterMaintenanceWindow = None,
  timeouts: PgClusterTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.cores">cores</a></code> | <code>typing.Union[int, float]</code> | The number of CPU cores per replica. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | The friendly name of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.instances">instances</a></code> | <code>typing.Union[int, float]</code> | The total number of instances in the cluster (one master and n-1 standbys). |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.location">location</a></code> | <code>str</code> | The physical location where the cluster will be created. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.postgresVersion">postgres_version</a></code> | <code>str</code> | The PostgreSQL version of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.ram">ram</a></code> | <code>typing.Union[int, float]</code> | The amount of memory per instance in megabytes. Has to be a multiple of 1024. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.storageSize">storage_size</a></code> | <code>typing.Union[int, float]</code> | The amount of storage per instance in megabytes. Has to be a multiple of 2048. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.storageType">storage_type</a></code> | <code>str</code> | The storage type used in your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.synchronizationMode">synchronization_mode</a></code> | <code>str</code> | Represents different modes of replication. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.allowReplace">allow_replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, allows the update of immutable fields by destroying and re-creating the cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.backupLocation">backup_location</a></code> | <code>str</code> | The Object Storage location where the backups will be stored. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.connectionPooler">connection_pooler</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler">PgClusterConnectionPooler</a></code> | connection_pooler block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.fromBackup">from_backup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a></code> | from_backup block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#id PgCluster#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts">PgClusterTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.cores"></a>

- *Type:* typing.Union[int, float]

The number of CPU cores per replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#cores PgCluster#cores}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.credentials"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#credentials PgCluster#credentials}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.displayName"></a>

- *Type:* str

The friendly name of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#display_name PgCluster#display_name}

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.instances"></a>

- *Type:* typing.Union[int, float]

The total number of instances in the cluster (one master and n-1 standbys).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#instances PgCluster#instances}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.location"></a>

- *Type:* str

The physical location where the cluster will be created.

This will be where all of your instances live. Property cannot be modified after datacenter creation (disallowed in update requests)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#location PgCluster#location}

---

##### `postgres_version`<sup>Required</sup> <a name="postgres_version" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.postgresVersion"></a>

- *Type:* str

The PostgreSQL version of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#postgres_version PgCluster#postgres_version}

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.ram"></a>

- *Type:* typing.Union[int, float]

The amount of memory per instance in megabytes. Has to be a multiple of 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#ram PgCluster#ram}

---

##### `storage_size`<sup>Required</sup> <a name="storage_size" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.storageSize"></a>

- *Type:* typing.Union[int, float]

The amount of storage per instance in megabytes. Has to be a multiple of 2048.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#storage_size PgCluster#storage_size}

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.storageType"></a>

- *Type:* str

The storage type used in your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#storage_type PgCluster#storage_type}

---

##### `synchronization_mode`<sup>Required</sup> <a name="synchronization_mode" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.synchronizationMode"></a>

- *Type:* str

Represents different modes of replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#synchronization_mode PgCluster#synchronization_mode}

---

##### `allow_replace`<sup>Optional</sup> <a name="allow_replace" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.allowReplace"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, allows the update of immutable fields by destroying and re-creating the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#allow_replace PgCluster#allow_replace}

---

##### `backup_location`<sup>Optional</sup> <a name="backup_location" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.backupLocation"></a>

- *Type:* str

The Object Storage location where the backups will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#backup_location PgCluster#backup_location}

---

##### `connection_pooler`<sup>Optional</sup> <a name="connection_pooler" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.connectionPooler"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler">PgClusterConnectionPooler</a>

connection_pooler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#connection_pooler PgCluster#connection_pooler}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.connections"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#connections PgCluster#connections}

---

##### `from_backup`<sup>Optional</sup> <a name="from_backup" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.fromBackup"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a>

from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#from_backup PgCluster#from_backup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#id PgCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#maintenance_window PgCluster#maintenance_window}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts">PgClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#timeouts PgCluster#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.putConnectionPooler">put_connection_pooler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.putConnections">put_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.putCredentials">put_credentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.putFromBackup">put_from_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.putMaintenanceWindow">put_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetAllowReplace">reset_allow_replace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetBackupLocation">reset_backup_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetConnectionPooler">reset_connection_pooler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetConnections">reset_connections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetFromBackup">reset_from_backup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetMaintenanceWindow">reset_maintenance_window</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_connection_pooler` <a name="put_connection_pooler" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putConnectionPooler"></a>

```python
def put_connection_pooler(
  enabled: typing.Union[bool, IResolvable],
  pool_mode: str
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putConnectionPooler.parameter.enabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#enabled PgCluster#enabled}.

---

###### `pool_mode`<sup>Required</sup> <a name="pool_mode" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putConnectionPooler.parameter.poolMode"></a>

- *Type:* str

Represents different modes of connection pooling for the connection pooler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#pool_mode PgCluster#pool_mode}

---

##### `put_connections` <a name="put_connections" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putConnections"></a>

```python
def put_connections(
  cidr: str,
  datacenter_id: str,
  lan_id: str
) -> None
```

###### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putConnections.parameter.cidr"></a>

- *Type:* str

The IP and subnet for the database.

Note the following unavailable IP ranges:
10.233.64.0/18
10.233.0.0/18
10.233.114.0/24

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#cidr PgCluster#cidr}

---

###### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putConnections.parameter.datacenterId"></a>

- *Type:* str

The datacenter to connect your cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#datacenter_id PgCluster#datacenter_id}

---

###### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putConnections.parameter.lanId"></a>

- *Type:* str

The LAN to connect your cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#lan_id PgCluster#lan_id}

---

##### `put_credentials` <a name="put_credentials" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putCredentials"></a>

```python
def put_credentials(
  password: str,
  username: str
) -> None
```

###### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putCredentials.parameter.password"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#password PgCluster#password}.

---

###### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putCredentials.parameter.username"></a>

- *Type:* str

the username for the initial postgres user. some system usernames are restricted (e.g. "postgres", "admin", "standby").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#username PgCluster#username}

---

##### `put_from_backup` <a name="put_from_backup" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putFromBackup"></a>

```python
def put_from_backup(
  backup_id: str,
  recovery_target_time: str = None
) -> None
```

###### `backup_id`<sup>Required</sup> <a name="backup_id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putFromBackup.parameter.backupId"></a>

- *Type:* str

The unique ID of the backup you want to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#backup_id PgCluster#backup_id}

---

###### `recovery_target_time`<sup>Optional</sup> <a name="recovery_target_time" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putFromBackup.parameter.recoveryTargetTime"></a>

- *Type:* str

If this value is supplied as ISO 8601 timestamp, the backup will be replayed up until the given timestamp.

If empty, the backup will be applied completely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#recovery_target_time PgCluster#recovery_target_time}

---

##### `put_maintenance_window` <a name="put_maintenance_window" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putMaintenanceWindow"></a>

```python
def put_maintenance_window(
  day_of_the_week: str,
  time: str
) -> None
```

###### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putMaintenanceWindow.parameter.dayOfTheWeek"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#day_of_the_week PgCluster#day_of_the_week}.

---

###### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putMaintenanceWindow.parameter.time"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#time PgCluster#time}.

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#create PgCluster#create}.

---

###### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putTimeouts.parameter.default"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#default PgCluster#default}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#delete PgCluster#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#update PgCluster#update}.

---

##### `reset_allow_replace` <a name="reset_allow_replace" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetAllowReplace"></a>

```python
def reset_allow_replace() -> None
```

##### `reset_backup_location` <a name="reset_backup_location" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetBackupLocation"></a>

```python
def reset_backup_location() -> None
```

##### `reset_connection_pooler` <a name="reset_connection_pooler" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetConnectionPooler"></a>

```python
def reset_connection_pooler() -> None
```

##### `reset_connections` <a name="reset_connections" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetConnections"></a>

```python
def reset_connections() -> None
```

##### `reset_from_backup` <a name="reset_from_backup" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetFromBackup"></a>

```python
def reset_from_backup() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_window` <a name="reset_maintenance_window" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetMaintenanceWindow"></a>

```python
def reset_maintenance_window() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a PgCluster resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.isConstruct"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgCluster.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgCluster.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgCluster.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgCluster.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a PgCluster resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the PgCluster to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing PgCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the PgCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connectionPooler">connection_pooler</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference">PgClusterConnectionPoolerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference">PgClusterConnectionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference">PgClusterCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.dnsName">dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.fromBackup">from_backup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference">PgClusterFromBackupOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference">PgClusterMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference">PgClusterTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.allowReplaceInput">allow_replace_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.backupLocationInput">backup_location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connectionPoolerInput">connection_pooler_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler">PgClusterConnectionPooler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connectionsInput">connections_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.coresInput">cores_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.credentialsInput">credentials_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.fromBackupInput">from_backup_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.instancesInput">instances_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.maintenanceWindowInput">maintenance_window_input</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.postgresVersionInput">postgres_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.ramInput">ram_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageSizeInput">storage_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageTypeInput">storage_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.synchronizationModeInput">synchronization_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts">PgClusterTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.allowReplace">allow_replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.backupLocation">backup_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.postgresVersion">postgres_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageSize">storage_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageType">storage_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.synchronizationMode">synchronization_mode</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `connection_pooler`<sup>Required</sup> <a name="connection_pooler" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connectionPooler"></a>

```python
connection_pooler: PgClusterConnectionPoolerOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference">PgClusterConnectionPoolerOutputReference</a>

---

##### `connections`<sup>Required</sup> <a name="connections" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connections"></a>

```python
connections: PgClusterConnectionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference">PgClusterConnectionsOutputReference</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.credentials"></a>

```python
credentials: PgClusterCredentialsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference">PgClusterCredentialsOutputReference</a>

---

##### `dns_name`<sup>Required</sup> <a name="dns_name" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.dnsName"></a>

```python
dns_name: str
```

- *Type:* str

---

##### `from_backup`<sup>Required</sup> <a name="from_backup" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.fromBackup"></a>

```python
from_backup: PgClusterFromBackupOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference">PgClusterFromBackupOutputReference</a>

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.maintenanceWindow"></a>

```python
maintenance_window: PgClusterMaintenanceWindowOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference">PgClusterMaintenanceWindowOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.timeouts"></a>

```python
timeouts: PgClusterTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference">PgClusterTimeoutsOutputReference</a>

---

##### `allow_replace_input`<sup>Optional</sup> <a name="allow_replace_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.allowReplaceInput"></a>

```python
allow_replace_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_location_input`<sup>Optional</sup> <a name="backup_location_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.backupLocationInput"></a>

```python
backup_location_input: str
```

- *Type:* str

---

##### `connection_pooler_input`<sup>Optional</sup> <a name="connection_pooler_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connectionPoolerInput"></a>

```python
connection_pooler_input: PgClusterConnectionPooler
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler">PgClusterConnectionPooler</a>

---

##### `connections_input`<sup>Optional</sup> <a name="connections_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.connectionsInput"></a>

```python
connections_input: PgClusterConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a>

---

##### `cores_input`<sup>Optional</sup> <a name="cores_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.coresInput"></a>

```python
cores_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `credentials_input`<sup>Optional</sup> <a name="credentials_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.credentialsInput"></a>

```python
credentials_input: PgClusterCredentials
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `from_backup_input`<sup>Optional</sup> <a name="from_backup_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.fromBackupInput"></a>

```python
from_backup_input: PgClusterFromBackup
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instances_input`<sup>Optional</sup> <a name="instances_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.instancesInput"></a>

```python
instances_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maintenance_window_input`<sup>Optional</sup> <a name="maintenance_window_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.maintenanceWindowInput"></a>

```python
maintenance_window_input: PgClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a>

---

##### `postgres_version_input`<sup>Optional</sup> <a name="postgres_version_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.postgresVersionInput"></a>

```python
postgres_version_input: str
```

- *Type:* str

---

##### `ram_input`<sup>Optional</sup> <a name="ram_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.ramInput"></a>

```python
ram_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_size_input`<sup>Optional</sup> <a name="storage_size_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageSizeInput"></a>

```python
storage_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type_input`<sup>Optional</sup> <a name="storage_type_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageTypeInput"></a>

```python
storage_type_input: str
```

- *Type:* str

---

##### `synchronization_mode_input`<sup>Optional</sup> <a name="synchronization_mode_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.synchronizationModeInput"></a>

```python
synchronization_mode_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, PgClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts">PgClusterTimeouts</a>]

---

##### `allow_replace`<sup>Required</sup> <a name="allow_replace" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.allowReplace"></a>

```python
allow_replace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `backup_location`<sup>Required</sup> <a name="backup_location" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.backupLocation"></a>

```python
backup_location: str
```

- *Type:* str

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `postgres_version`<sup>Required</sup> <a name="postgres_version" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.postgresVersion"></a>

```python
postgres_version: str
```

- *Type:* str

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_size`<sup>Required</sup> <a name="storage_size" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageSize"></a>

```python
storage_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

---

##### `synchronization_mode`<sup>Required</sup> <a name="synchronization_mode" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.synchronizationMode"></a>

```python
synchronization_mode: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-ionoscloud.pgCluster.PgCluster.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### PgClusterConfig <a name="PgClusterConfig" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgClusterConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  cores: typing.Union[int, float],
  credentials: PgClusterCredentials,
  display_name: str,
  instances: typing.Union[int, float],
  location: str,
  postgres_version: str,
  ram: typing.Union[int, float],
  storage_size: typing.Union[int, float],
  storage_type: str,
  synchronization_mode: str,
  allow_replace: typing.Union[bool, IResolvable] = None,
  backup_location: str = None,
  connection_pooler: PgClusterConnectionPooler = None,
  connections: PgClusterConnections = None,
  from_backup: PgClusterFromBackup = None,
  id: str = None,
  maintenance_window: PgClusterMaintenanceWindow = None,
  timeouts: PgClusterTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.cores">cores</a></code> | <code>typing.Union[int, float]</code> | The number of CPU cores per replica. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.credentials">credentials</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a></code> | credentials block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.displayName">display_name</a></code> | <code>str</code> | The friendly name of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.instances">instances</a></code> | <code>typing.Union[int, float]</code> | The total number of instances in the cluster (one master and n-1 standbys). |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.location">location</a></code> | <code>str</code> | The physical location where the cluster will be created. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.postgresVersion">postgres_version</a></code> | <code>str</code> | The PostgreSQL version of your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.ram">ram</a></code> | <code>typing.Union[int, float]</code> | The amount of memory per instance in megabytes. Has to be a multiple of 1024. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.storageSize">storage_size</a></code> | <code>typing.Union[int, float]</code> | The amount of storage per instance in megabytes. Has to be a multiple of 2048. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.storageType">storage_type</a></code> | <code>str</code> | The storage type used in your cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.synchronizationMode">synchronization_mode</a></code> | <code>str</code> | Represents different modes of replication. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.allowReplace">allow_replace</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When set to true, allows the update of immutable fields by destroying and re-creating the cluster. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.backupLocation">backup_location</a></code> | <code>str</code> | The Object Storage location where the backups will be stored. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.connectionPooler">connection_pooler</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler">PgClusterConnectionPooler</a></code> | connection_pooler block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.connections">connections</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a></code> | connections block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.fromBackup">from_backup</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a></code> | from_backup block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#id PgCluster#id}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts">PgClusterTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cores`<sup>Required</sup> <a name="cores" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.cores"></a>

```python
cores: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The number of CPU cores per replica.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#cores PgCluster#cores}

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.credentials"></a>

```python
credentials: PgClusterCredentials
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a>

credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#credentials PgCluster#credentials}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

The friendly name of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#display_name PgCluster#display_name}

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.instances"></a>

```python
instances: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The total number of instances in the cluster (one master and n-1 standbys).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#instances PgCluster#instances}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The physical location where the cluster will be created.

This will be where all of your instances live. Property cannot be modified after datacenter creation (disallowed in update requests)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#location PgCluster#location}

---

##### `postgres_version`<sup>Required</sup> <a name="postgres_version" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.postgresVersion"></a>

```python
postgres_version: str
```

- *Type:* str

The PostgreSQL version of your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#postgres_version PgCluster#postgres_version}

---

##### `ram`<sup>Required</sup> <a name="ram" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.ram"></a>

```python
ram: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of memory per instance in megabytes. Has to be a multiple of 1024.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#ram PgCluster#ram}

---

##### `storage_size`<sup>Required</sup> <a name="storage_size" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.storageSize"></a>

```python
storage_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

The amount of storage per instance in megabytes. Has to be a multiple of 2048.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#storage_size PgCluster#storage_size}

---

##### `storage_type`<sup>Required</sup> <a name="storage_type" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.storageType"></a>

```python
storage_type: str
```

- *Type:* str

The storage type used in your cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#storage_type PgCluster#storage_type}

---

##### `synchronization_mode`<sup>Required</sup> <a name="synchronization_mode" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.synchronizationMode"></a>

```python
synchronization_mode: str
```

- *Type:* str

Represents different modes of replication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#synchronization_mode PgCluster#synchronization_mode}

---

##### `allow_replace`<sup>Optional</sup> <a name="allow_replace" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.allowReplace"></a>

```python
allow_replace: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When set to true, allows the update of immutable fields by destroying and re-creating the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#allow_replace PgCluster#allow_replace}

---

##### `backup_location`<sup>Optional</sup> <a name="backup_location" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.backupLocation"></a>

```python
backup_location: str
```

- *Type:* str

The Object Storage location where the backups will be stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#backup_location PgCluster#backup_location}

---

##### `connection_pooler`<sup>Optional</sup> <a name="connection_pooler" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.connectionPooler"></a>

```python
connection_pooler: PgClusterConnectionPooler
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler">PgClusterConnectionPooler</a>

connection_pooler block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#connection_pooler PgCluster#connection_pooler}

---

##### `connections`<sup>Optional</sup> <a name="connections" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.connections"></a>

```python
connections: PgClusterConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a>

connections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#connections PgCluster#connections}

---

##### `from_backup`<sup>Optional</sup> <a name="from_backup" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.fromBackup"></a>

```python
from_backup: PgClusterFromBackup
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a>

from_backup block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#from_backup PgCluster#from_backup}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#id PgCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_window`<sup>Optional</sup> <a name="maintenance_window" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.maintenanceWindow"></a>

```python
maintenance_window: PgClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#maintenance_window PgCluster#maintenance_window}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConfig.property.timeouts"></a>

```python
timeouts: PgClusterTimeouts
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts">PgClusterTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#timeouts PgCluster#timeouts}

---

### PgClusterConnectionPooler <a name="PgClusterConnectionPooler" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgClusterConnectionPooler(
  enabled: typing.Union[bool, IResolvable],
  pool_mode: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#enabled PgCluster#enabled}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler.property.poolMode">pool_mode</a></code> | <code>str</code> | Represents different modes of connection pooling for the connection pooler. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#enabled PgCluster#enabled}.

---

##### `pool_mode`<sup>Required</sup> <a name="pool_mode" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler.property.poolMode"></a>

```python
pool_mode: str
```

- *Type:* str

Represents different modes of connection pooling for the connection pooler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#pool_mode PgCluster#pool_mode}

---

### PgClusterConnections <a name="PgClusterConnections" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgClusterConnections(
  cidr: str,
  datacenter_id: str,
  lan_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.property.cidr">cidr</a></code> | <code>str</code> | The IP and subnet for the database. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.property.datacenterId">datacenter_id</a></code> | <code>str</code> | The datacenter to connect your cluster to. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.property.lanId">lan_id</a></code> | <code>str</code> | The LAN to connect your cluster to. |

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

The IP and subnet for the database.

Note the following unavailable IP ranges:
10.233.64.0/18
10.233.0.0/18
10.233.114.0/24

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#cidr PgCluster#cidr}

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

The datacenter to connect your cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#datacenter_id PgCluster#datacenter_id}

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

The LAN to connect your cluster to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#lan_id PgCluster#lan_id}

---

### PgClusterCredentials <a name="PgClusterCredentials" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgClusterCredentials(
  password: str,
  username: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials.property.password">password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#password PgCluster#password}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials.property.username">username</a></code> | <code>str</code> | the username for the initial postgres user. some system usernames are restricted (e.g. "postgres", "admin", "standby"). |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials.property.password"></a>

```python
password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#password PgCluster#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials.property.username"></a>

```python
username: str
```

- *Type:* str

the username for the initial postgres user. some system usernames are restricted (e.g. "postgres", "admin", "standby").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#username PgCluster#username}

---

### PgClusterFromBackup <a name="PgClusterFromBackup" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgClusterFromBackup(
  backup_id: str,
  recovery_target_time: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup.property.backupId">backup_id</a></code> | <code>str</code> | The unique ID of the backup you want to restore. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup.property.recoveryTargetTime">recovery_target_time</a></code> | <code>str</code> | If this value is supplied as ISO 8601 timestamp, the backup will be replayed up until the given timestamp. |

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

The unique ID of the backup you want to restore.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#backup_id PgCluster#backup_id}

---

##### `recovery_target_time`<sup>Optional</sup> <a name="recovery_target_time" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup.property.recoveryTargetTime"></a>

```python
recovery_target_time: str
```

- *Type:* str

If this value is supplied as ISO 8601 timestamp, the backup will be replayed up until the given timestamp.

If empty, the backup will be applied completely.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#recovery_target_time PgCluster#recovery_target_time}

---

### PgClusterMaintenanceWindow <a name="PgClusterMaintenanceWindow" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgClusterMaintenanceWindow(
  day_of_the_week: str,
  time: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#day_of_the_week PgCluster#day_of_the_week}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow.property.time">time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#time PgCluster#time}. |

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#day_of_the_week PgCluster#day_of_the_week}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow.property.time"></a>

```python
time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#time PgCluster#time}.

---

### PgClusterTimeouts <a name="PgClusterTimeouts" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgClusterTimeouts(
  create: str = None,
  default: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#create PgCluster#create}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.default">default</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#default PgCluster#default}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#delete PgCluster#delete}. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#update PgCluster#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#create PgCluster#create}.

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.default"></a>

```python
default: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#default PgCluster#default}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#delete PgCluster#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.0/docs/resources/pg_cluster#update PgCluster#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PgClusterConnectionPoolerOutputReference <a name="PgClusterConnectionPoolerOutputReference" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgClusterConnectionPoolerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.enabledInput">enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.poolModeInput">pool_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.enabled">enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.poolMode">pool_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler">PgClusterConnectionPooler</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.enabledInput"></a>

```python
enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pool_mode_input`<sup>Optional</sup> <a name="pool_mode_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.poolModeInput"></a>

```python
pool_mode_input: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.enabled"></a>

```python
enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pool_mode`<sup>Required</sup> <a name="pool_mode" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.poolMode"></a>

```python
pool_mode: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPoolerOutputReference.property.internalValue"></a>

```python
internal_value: PgClusterConnectionPooler
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionPooler">PgClusterConnectionPooler</a>

---


### PgClusterConnectionsOutputReference <a name="PgClusterConnectionsOutputReference" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgClusterConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.cidrInput">cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.datacenterIdInput">datacenter_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.lanIdInput">lan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.cidr">cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.datacenterId">datacenter_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.lanId">lan_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cidr_input`<sup>Optional</sup> <a name="cidr_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.cidrInput"></a>

```python
cidr_input: str
```

- *Type:* str

---

##### `datacenter_id_input`<sup>Optional</sup> <a name="datacenter_id_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.datacenterIdInput"></a>

```python
datacenter_id_input: str
```

- *Type:* str

---

##### `lan_id_input`<sup>Optional</sup> <a name="lan_id_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.lanIdInput"></a>

```python
lan_id_input: str
```

- *Type:* str

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.cidr"></a>

```python
cidr: str
```

- *Type:* str

---

##### `datacenter_id`<sup>Required</sup> <a name="datacenter_id" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.datacenterId"></a>

```python
datacenter_id: str
```

- *Type:* str

---

##### `lan_id`<sup>Required</sup> <a name="lan_id" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.lanId"></a>

```python
lan_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: PgClusterConnections
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterConnections">PgClusterConnections</a>

---


### PgClusterCredentialsOutputReference <a name="PgClusterCredentialsOutputReference" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgClusterCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.passwordInput">password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.usernameInput">username_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.password">password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.username">username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `password_input`<sup>Optional</sup> <a name="password_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.passwordInput"></a>

```python
password_input: str
```

- *Type:* str

---

##### `username_input`<sup>Optional</sup> <a name="username_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.usernameInput"></a>

```python
username_input: str
```

- *Type:* str

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.password"></a>

```python
password: str
```

- *Type:* str

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.username"></a>

```python
username: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: PgClusterCredentials
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterCredentials">PgClusterCredentials</a>

---


### PgClusterFromBackupOutputReference <a name="PgClusterFromBackupOutputReference" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgClusterFromBackupOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.resetRecoveryTargetTime">reset_recovery_target_time</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_recovery_target_time` <a name="reset_recovery_target_time" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.resetRecoveryTargetTime"></a>

```python
def reset_recovery_target_time() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.recoveryTargetTimeInput">recovery_target_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.recoveryTargetTime">recovery_target_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `recovery_target_time_input`<sup>Optional</sup> <a name="recovery_target_time_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.recoveryTargetTimeInput"></a>

```python
recovery_target_time_input: str
```

- *Type:* str

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `recovery_target_time`<sup>Required</sup> <a name="recovery_target_time" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.recoveryTargetTime"></a>

```python
recovery_target_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackupOutputReference.property.internalValue"></a>

```python
internal_value: PgClusterFromBackup
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterFromBackup">PgClusterFromBackup</a>

---


### PgClusterMaintenanceWindowOutputReference <a name="PgClusterMaintenanceWindowOutputReference" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgClusterMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.dayOfTheWeekInput">day_of_the_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.timeInput">time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.dayOfTheWeek">day_of_the_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.time">time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_the_week_input`<sup>Optional</sup> <a name="day_of_the_week_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.dayOfTheWeekInput"></a>

```python
day_of_the_week_input: str
```

- *Type:* str

---

##### `time_input`<sup>Optional</sup> <a name="time_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.timeInput"></a>

```python
time_input: str
```

- *Type:* str

---

##### `day_of_the_week`<sup>Required</sup> <a name="day_of_the_week" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.dayOfTheWeek"></a>

```python
day_of_the_week: str
```

- *Type:* str

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.time"></a>

```python
time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: PgClusterMaintenanceWindow
```

- *Type:* <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterMaintenanceWindow">PgClusterMaintenanceWindow</a>

---


### PgClusterTimeoutsOutputReference <a name="PgClusterTimeoutsOutputReference" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_ionoscloud import pg_cluster

pgCluster.PgClusterTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetDefault">reset_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_default` <a name="reset_default" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetDefault"></a>

```python
def reset_default() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.defaultInput">default_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.default">default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts">PgClusterTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `default_input`<sup>Optional</sup> <a name="default_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.defaultInput"></a>

```python
default_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.default"></a>

```python
default: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, PgClusterTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-ionoscloud.pgCluster.PgClusterTimeouts">PgClusterTimeouts</a>]

---



